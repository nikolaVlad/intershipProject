import { action, makeObservable, observable } from "mobx";
import { deleteWishlistProduct, destroyWishlist, postWishlistProduct } from "../actions/wishlist";
import { getWishlist } from "../api";
import {createAlert} from '../components/Common/Alert/Alert';
import { getToken } from "../utils/localStorageService";
import ProductsStore from "./ProductsStore";

class WishList 
{

    @observable WishListProducts = []; 

    constructor()
    {
        makeObservable(this);
    }

 
    @action setWishListProducts(value)
    {
        if(value) return this.WishListProducts = value;
        else return this.WishListProducts = [];
    }


    @action setWishListProduct = async (product) =>
    {
       
        await postWishlistProduct(product.id);
        this.setWishListProducts([product , ...this.WishListProducts]);
        createAlert('Add ' + product.name + 'to wish list.' )
    }

    @action removeWishListProduct = async (product) => 
    {
        if(!product)
        {

            await destroyWishlist();
            this.setWishListProducts([]);
            createAlert('Wish list is empty', 'info');
            return;
        }


        // Remove from server wishlist
        await deleteWishlistProduct(product.id);

        this.setWishListProducts( this.WishListProducts.filter(wlProduct => wlProduct.id != product.id));
        createAlert('Remove ' + product.name + 'from wish list.', 'warning');
    }

    @action initWishList = async () =>
    {
        if (getToken()) {
            try {
                let data = await getWishlist();
                if (data) {
                    ProductsStore.products.map((product) => {
                        if (data.includes(parseInt(product.id))) {
                           return this.setWishListProducts([...this.WishListProducts, product]);
                        }
                    });
                }
            } 
            catch (error) {
                console.log(error);
            }
        }
    }

    @action emptyWishList = () =>
    {
        this.setWishListProducts([]);
    }


}

let WishListStore = new WishList();

export default WishListStore;