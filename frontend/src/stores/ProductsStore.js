import { action, makeObservable, observable } from 'mobx';
import {getProducts} from '../actions/products';


class Product 
{
    @observable products = [];

    constructor() {
        makeObservable(this);
    }

    @action async getAllProduct() {

        if (this.products.length != 0) {
            return this.products;
        }
        
        try
        {
            const { data } = await getProducts();
            this.products = data;
            return this.products;
        }

        catch(error)
        {
            console.log(error)
            return error;
        }
        
    }
}

let ProductsStore = new Product();
export default ProductsStore;
