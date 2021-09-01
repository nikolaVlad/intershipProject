import { Router } from 'express';
import { postPayment } from '../controllers/payment.controller';
import isAuthenticated from '../middlewares/auth.middleware';


const paymentRouter = Router();

paymentRouter.post('/create', isAuthenticated, postPayment);





export default paymentRouter;