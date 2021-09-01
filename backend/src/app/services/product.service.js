import axios from "axios";
import { getAll } from "./comment.service";
import {UserProduct} from '../../db/models'
import priceToNumber from "../utils/priceToNumber";


// Create new user-product - purschase
export const createMore = async (userId , productList, purchaseId) =>
{
    // Creating records for bulk create
    const data = productList.map(productId =>
        {
            return {
                userId,
                purchaseId,
                productId
            }
        })

    const result = await UserProduct.bulkCreate(data);
    return result;
}


export const get = async () =>
{
    try
    {
        const data = await axios.get('https://safe-refuge-30518.herokuapp.com/games');
        return data.data.data;
    }

    catch(error)
    {
        console.log(error);
        return error;
    }
}

export const getOne = async (id) =>
{
    try
    {
        // Get comments from 3-part API
        const data = await axios.get(`https://safe-refuge-30518.herokuapp.com/games/${id}`);

        // Get comments from this API
        let comments = await getAll(id);

        // Formating comments
        comments = comments.map((comment) =>
        {
            return {
                id : comment.id,
                name : comment.User.firstName + ' ' + comment.User.lastName,
                comment : comment.content,
                userId : comment.userId
            }
        })

        // Saving comments
        comments = [ ...data.data.data.comments, ...comments];

        // Setting comments for client view
        data.data.data.comments = comments.reverse();

        return data.data.data;
    }
    catch(error)
    {
        console.log(error);
        return error;
    }
}

export const getPrice = async (id) =>
{
    try
    {
        // Get product from 3-part API
        const data = await axios.get(`https://safe-refuge-30518.herokuapp.com/games/${id}`);
        // Convert price to float number
        return priceToNumber(data.data.data.price);
    }

    catch(error)
    {
        console.log(error);
        return error;
    }
}

export const getTotalPrice = async (productsIdList) =>
{
    let total = 0;
    for(let productId of productsIdList)
    {
        total += await getPrice(productId);
    }
    return parseFloat(total).toFixed(3);
}
