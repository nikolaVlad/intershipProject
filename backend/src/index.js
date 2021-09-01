import logger from 'morgan';
import express, { json, urlencoded } from 'express';
import config from './config/config';
import cors from 'cors';

import userRoutes from './app/routes/user.routes';
import productRouter from './app/routes/product.routes';
import authRoutes from './app/routes/auth.routes';
import cartRoutes from './app/routes/cart.routes';
import wishlistRoutes from './app/routes/wishlist.routes';
import commentRoutes from './app/routes/comments.routes';
import paymentRoutes from './app/routes/payment.routes';
import mailRoutes from './app/routes/mail.routes'
import forumRoutes from './app/routes/forum.routes';

const app = express();
const { port } = config.app;

app.use(logger('dev'));
app.use(json());
app.use(urlencoded({ extended: true }));

// Midleware cors setup
app.use(
    cors({
        origin: '*',
    })
);

app.use('/products', productRouter);

app.use('/auth' , authRoutes);

app.use('/user', userRoutes);

app.use('/cart', cartRoutes);

app.use('/wishlist',wishlistRoutes)

app.use('/comment' , commentRoutes);

app.use('/payments' , paymentRoutes);

app.use('/mail' , mailRoutes);

// Forum

app.use('/forum', forumRoutes);



app.get('/test' , (req , res) =>
{
    console.log("Stigo test");

    res.status(200).send("SERVER : Sve ok");
});


app.listen(port, () => console.log(`App listening on port : ${port}`));
