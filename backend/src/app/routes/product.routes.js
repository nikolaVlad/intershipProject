import { Router } from 'express';
import {getAllProducts , getProduct} from '../controllers/product.controller';

const productRouter = Router();

// Routes

productRouter.get('/' , getAllProducts)

productRouter.get('/:id', getProduct)

export default productRouter;