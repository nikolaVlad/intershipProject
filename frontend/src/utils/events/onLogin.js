import CartStore from "../../stores/CartStore";
import WishListStore from "../../stores/WishListStore";
import { setToken } from "../localStorageService";

const onLogin = async (token) =>
{
    setToken(token);
    await CartStore.initCart();
    await WishListStore.initWishList();
   
}

export default onLogin;