import { action, makeObservable, observable } from 'mobx';
import { getUserProducts } from '../actions/user';
import ProductsStore from './ProductsStore';

class UserProducts {
    @observable products = [];

    constructor() {
        makeObservable(this);
    }

    @action async setProducts(value) {
        this.products = value;
    }

    @action async init() {
        this.setProducts([]);
        const data = await getUserProducts();
        await ProductsStore.getAllProduct()

        if (data) {
            ProductsStore.products.map((product) => 
            {
                data.map((userProduct) => 
                {
                    if (userProduct.productId === parseInt(product.id)) 
                    {
                        product = {...product , purchaseId : userProduct.purchaseId}
                        this.setProducts([...this.products, product ])
                    }
                });
            });
        }

        console.log(this.products);
    }
}

export default new UserProducts();
