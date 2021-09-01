import { Router } from 'express';
import { getCart, postProduct, deleteProduct, destroyCart } from '../controllers/cart.controller';
import isAuthenticated from '../middlewares/auth.middleware';

const cartRouter = Router();


cartRouter.post('/product', isAuthenticated, postProduct);

cartRouter.get('/',isAuthenticated,getCart)

cartRouter.delete('/product', isAuthenticated, deleteProduct);

cartRouter.delete('/' , isAuthenticated, destroyCart);

export default cartRouter;