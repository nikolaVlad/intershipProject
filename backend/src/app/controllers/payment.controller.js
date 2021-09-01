import { checkPayment } from "../services/checkout.service";
import {create} from '../services/purchase.service'
import { createMore, getTotalPrice } from "../services/product.service";
import { get } from '../services/cart.service'
import { destroy } from '../services/cart.service'

export const postPayment = async (req, res) =>
{
    const TAX = 10;

    try
    {
        const paymentResult =  await checkPayment(req.loggedUser.id);

        console.log("Payment check : " , paymentResult);

        // Payment chech failde
        if (!paymentResult) {
            const message = 'Payment check is failed. Please check if paymentApp is running!!!'
            console.log(message)
            return res.status(400).send({
                error: {
                    message
                },
            });
        }

        // Get all product from cart
        const cartResult = await get(req.loggedUser.id);

        // Created list of purchased products from products cart
        const productsIdList = cartResult.map(cart => cart.productId);

        // Get amount (total price) of purchased products
        const amount = await getTotalPrice(productsIdList);

        // Create one new purchase 
        const purchaseResult = await create(req.loggedUser.id, amount, TAX);

        // Get purchaseId, for add record in table user_products
        const purchaseId = purchaseResult.id; 

        // Set games purchased products to table userproducts 
        await createMore(req.loggedUser.id , productsIdList, purchaseId);

        // Empty card 
        await destroy(req.loggedUser.id);
        

        return res.status(200).send({
            message : 'Purchase made successfully.'
        })

    }

    catch(error)
    {
        console.log(error);
        return res.status(500).send("Something went wrong.");
    }


    
  
}