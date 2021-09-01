import { Router } from 'express';
import { postComment , deleteComment, editComment} from '../controllers/comments.controller';
import isAuthenticated from '../middlewares/auth.middleware';

const commentRouter = Router();

commentRouter.post('/', isAuthenticated , postComment);

commentRouter.put('/',isAuthenticated, editComment);
commentRouter.delete('/', isAuthenticated , deleteComment);


export default commentRouter;
