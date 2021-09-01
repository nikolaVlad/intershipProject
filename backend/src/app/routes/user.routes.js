import { Router } from 'express';
import { getUser, deleteUser, updateUser, updatePassword, getUserPurchases } from '../controllers/user.controller';
import isAuthenticated from '../middlewares/auth.middleware';
import validate from '../middlewares/validation.middleware';
import updateUserSchema from '../rules/updateUser.schema';
import updatePasswordSchema from '../rules/updatePassword.schema';
import { getUserProducts } from '../controllers/user.controller'; 

const userRouter = Router();

userRouter.get('/', isAuthenticated ,getUser);
userRouter.get('/products' , isAuthenticated , getUserProducts);
userRouter.get('/purchases' , isAuthenticated , getUserPurchases);
userRouter.put('/', isAuthenticated , validate(updateUserSchema), updateUser);
userRouter.put('/password', isAuthenticated , validate(updatePasswordSchema), updatePassword);
userRouter.delete('/' , isAuthenticated, deleteUser);


export default userRouter;
