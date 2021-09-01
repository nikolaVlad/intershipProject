import { action, makeObservable, observable } from "mobx";
import { getUserPurchases } from "../actions/user";
import ProductsStore from "./ProductsStore";

class UserProducts 
{
    @observable purchases = [];
    
    constructor() {
        makeObservable(this);
    }

    @action async setPurchases(value)
    {
       this.purchases = value;
    }

    @action async init()
    {
        this.setPurchases([]);
        // Point : Move this on backend
        ProductsStore.getAllProduct();

        try 
        {
            const data = await getUserPurchases();
            this.setPurchases(data);
        } 

        catch (error) {
            console.log(error);
        }
    }

   

}


export default new UserProducts();