import {Router} from 'express';
import { getWishlist, postProduct, deleteProduct, destroyWishlist} from '../controllers/wishlist.controller';
import isAuthenticated from '../middlewares/auth.middleware';
// import isAuthenticated from '../middlewares/auth.middleware';

const wishlistRouter = Router();


wishlistRouter.post('/product', isAuthenticated, postProduct);

wishlistRouter.get('/',isAuthenticated,getWishlist)

wishlistRouter.delete('/product', isAuthenticated, deleteProduct);

wishlistRouter.delete('/' , isAuthenticated, destroyWishlist);




export default wishlistRouter;