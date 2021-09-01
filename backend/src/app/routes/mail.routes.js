import { Router } from 'express';
import { sendMail } from '../controllers/mail.controller';
import isAuthenticated from '../middlewares/auth.middleware';



const mailRouter = Router();

mailRouter.post('/' , isAuthenticated ,sendMail)



export default mailRouter;