import CartStore from "../../stores/CartStore";
import WishListStore from "../../stores/WishListStore";
import { clearToken } from ".././localStorageService"

const onLogout = () =>
{
    clearToken();
    CartStore.emptyCart();
    WishListStore.emptyWishList();
    
}

export default onLogout