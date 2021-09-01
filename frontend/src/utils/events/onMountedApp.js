import AuthStore from '../../stores/AuthStore';
import CartStore from '../../stores/CartStore';
import { getToken } from '../../utils/localStorageService';
import ProductsStore from '../../stores/ProductsStore'
import WishListStore from '../../stores/WishListStore';


const onMountedApp = async() =>
{
    // Set token
    AuthStore.setIsLogged(getToken())
    // Load all products
    await ProductsStore.getAllProduct();
    // Init cart products
    await CartStore.initCart();

    await WishListStore.initWishList();
}


export default onMountedApp;