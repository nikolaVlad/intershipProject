import { Router } from 'express';
import {
    postTopic,
    getTopics,
    getOneTopic,
    deleteOneTopic,
    editOneTopic,
    postPost,
    getPosts,
    getOnePost,
    deleteOnePost,
    editOnePost,
    postComment,
    getOneComments,
    deleteOneComment,
    editOneComment,
} from '../controllers/forum.controller';
import isAuthenticated from '../middlewares/auth.middleware';

const ForumRouter = Router();

// Topics
ForumRouter.post('/topics' , isAuthenticated, postTopic);
ForumRouter.get('/topics', isAuthenticated , getTopics);
ForumRouter.get('/topics/:id', isAuthenticated, getOneTopic)
ForumRouter.delete('/topics/:id' , isAuthenticated, deleteOneTopic);
ForumRouter.put('/topics/:id' , isAuthenticated , editOneTopic);
ForumRouter.put('/topics/:id' , isAuthenticated, )
// Posts
ForumRouter.post('/posts', isAuthenticated, postPost);
ForumRouter.get('/posts/:topicId' , isAuthenticated , getPosts);
ForumRouter.get('/posts/:topicId/:postId' , isAuthenticated , getOnePost)
ForumRouter.delete('/posts/:topicId/:postId' , isAuthenticated , deleteOnePost);
ForumRouter.put('/posts/:topicId/:postId' , isAuthenticated , editOnePost);
// Comments
ForumRouter.post('/postComments/:postId', isAuthenticated , postComment);
ForumRouter.get('/postComments/:postId' , isAuthenticated , getOneComments);
ForumRouter.put('/postComment/:id' , isAuthenticated, editOneComment)
ForumRouter.delete('/postComments/:id' ,isAuthenticated , deleteOneComment);

export default ForumRouter;