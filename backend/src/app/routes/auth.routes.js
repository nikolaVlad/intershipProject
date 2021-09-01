import { Router } from 'express';
import { signup, signin } from '../controllers/auth.controller';
import validate from '../middlewares/validation.middleware';
import signinSchema from '../rules/signin.schema';
import signupSchema from '../rules/signup.schema';


const authRouter = Router();

// Routes

// Create new user ( Register ) 
authRouter.post('/signup', validate(signupSchema), signup);
// Login user
authRouter.post('/signin', validate(signinSchema) ,signin);





export default authRouter;
