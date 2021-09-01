/* eslint-disable no-unused-vars */
import axios from 'axios';
import {getToken} from '../utils/localStorageService';
import { baseURL, timeout } from './config';
import { responseSuccessHandler, responseErrorHandler } from './response';

// API instance
const API = axios.create({ baseURL, timeout });

// API interceptors

// For response and error handlers
API.interceptors.response.use(responseSuccessHandler, responseErrorHandler);

// For send token allways
API.interceptors.request.use(
    (config) => {
        const token = getToken();
        if (token) {
            config.headers['Authorization'] = token;
        }
        config.headers['Content-Type'] = 'application/json';
        return config;
    },
    (error) => {
       
        Promise.reject(error);
    }
);

//------------------- API ROUTES --------------------

// products API
export const getProducts = () => API.get('/products');
export const getProductById = (id) => API.get(`/products/${id}`);

// Test route
export const test = () => API.post('/test');

// auth API
export const signup = (userData) => API.post('/auth/signup', userData);
export const signin = (logInData) => API.post('/auth/signin' , logInData);


// User API
export const getUser = () => API.get(`/user`);
export const getUserProducts = () => API.get('/user/products');
export const getUserPurchases = () => API.get('/user/purchases');
export const updateUser = (userData) => API.put('/user', userData); 
export const updatePassword = (passwordData) => API.put('/user/password', passwordData);
export const deleteUser = () => API.delete('/user');

// Cart API
export const postCartProduct = (id) => API.post('/cart/product',{id});
export const getCart = () => API.get('/cart');
export const deleteCartProduct = (id) =>
    API.delete('/cart/product', { data: { id } });
export const destroyCart = () => API.delete('/cart');

// Wishlist API
export const postWishlistProduct = (id) => API.post('wishlist/product', {id});
export const getWishlist = () => API.get('wishlist');
export const deleteWishlistProduct = (id) =>
    API.delete('/wishlist/product', { data: { id } });
export const destroyWishlist = () => API.delete('/wishlist');

// Comment API
export const postComment = (productId , content) => API.post('/comment', {productId , content});
export const editComment = (id , content) => API.put('/comment' , {id, content});
export const deleteComment = (id) => API.delete('/comment', {data : {id} });

// Payments API
export const postPayment = () => API.post('/payments/create');

// Mail API
export const postMail = (subject , message) => API.post('/mail', {subject , message});


// Forum API
// - TOPICS
export const postTopic = (name) => API.post('/forum/topics' , {name});
export const getTopics = () => API.get('/forum/topics');
export const getTopic = (id) => API.get(`/forum/topics/${id}`);
export const editTopic = (id, data) => API.put(`/forum/topics/${id}`, data);
export const deleteTopic = (id) => API.delete(`/forum/topics/${id}`);

// - POSTS
export const postPost = (title , topicId) => API.post('/forum/posts' , {title , topicId});
export const getPosts = (topicId) => API.get(`/forum/posts/${topicId}`);
export const getPost = (topicId,postId) => API.get(`/forum/posts/${topicId}/${postId}`);
export const editPost = (topicId, postId , title) => API.put(`/forum/posts/${topicId}/${postId}`, {title});
export const deletePost = (topicId , postId) => API.delete(`/forum/posts/${topicId}/${postId}`);

// - COMMENTS   
export const postPostComment = (postId , content) => API.post(`/forum/postComments/${postId}` , {content});
export const getPostComments = (postId) => API.get(`/forum/postComments/${postId}`);
export const editPostComment = (id , content) => API.put(`/forum/postComment/${id}`, {content});
export const deletePostComment = (id) => API.delete(`forum/postComments/${id}`);