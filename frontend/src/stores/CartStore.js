/* eslint-disable no-unused-vars */
import { action, observable, makeObservable } from "mobx";
import priceToNumber from "../utils/priceToNumber";
import { createAlert } from "../components/Common/Alert/Alert";
import { deleteCartProduct, destroyCart, getCart, postCartProduct } from "../actions/cart";
import { getToken } from "../utils/localStorageService";
import ProductsStore from "./ProductsStore";

class Cart 
{
    @observable CartProductsList = []; 
    @observable total = 0;


    constructor()
    {
        makeObservable(this)
    }



    @action setCartProductList(value)
    {
        if(value) return this.CartProductsList = value;
        else return this.CartProductsList = [];
    }

    @action  setCartProductItem = async (product, noAlert) =>
    {
        // Convert string price field to float - for calculating
        let productPrice = priceToNumber(product.price);

        // Add product in cart on server
        await postCartProduct(product.id);
      

        // Add product in cart
        this.setCartProductList([ ...this.CartProductsList , product]);
        this.total += productPrice;
        
        if(!noAlert) createAlert(product.name + " added in the cart!")
       
    }
    

    @action removeProductFromCart = async (product, noAlert) =>
    {
        // Remove all products
        if(!product)
        {
            // Empty cart on server
            await destroyCart();
            this.setCartProductList([]);
            createAlert("Cart is empty!", 'info')
            return;
        }

        // Add product in cart on server
        await deleteCartProduct(product.id);

        // Delete product from cart
        this.setCartProductList(this.CartProductsList.filter(cartProduct => cartProduct.id != product.id));
        this.total -= priceToNumber(product.price);

        if(!noAlert) createAlert(product.name + " removed from cart!", 'warning')
    }
    

    @action initCart = async() =>
    {
        if (getToken()) {
            try {
                let data = await getCart();
                if (data) {
                    ProductsStore.products.map((product) => {
                        if (data.includes(parseInt(product.id))) {
                           return this.setCartProductList([...this.CartProductsList, product]);
                        }
                    });
                }
            } 
            catch (error) {
                console.log(error);
            }
        }
    }

    @action emptyCart = () =>
    {
        this.setCartProductList([]);
        this.total = 0;
    } 

}

let CartStore = new Cart();

export default CartStore;