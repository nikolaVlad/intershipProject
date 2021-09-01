// import {get} from '../services/cart.service'
import {Purchase} from '../../db/models';
import { UserProducts } from '../../db/models';

export const create = async (userId, amount , tax) =>
{
    try {
        let taxNum = parseFloat(parseFloat(tax/100).toFixed(1));
        amount = parseFloat(amount);
        const t = parseFloat(parseFloat(taxNum * amount).toFixed(1));
        const price = amount + t;

        // Create one purchase
        const result = await Purchase.create({
            userId,
            amount : price,
            tax : tax,
            date : new Date()
        });

        return result;
    } 
    
    catch (error) {
        console.log(error);
        return error;
    }
}   


export const get = async (userId) =>
{
    try
    {
      return await Purchase.findAll({
          where : {userId : userId},
          includes : UserProducts,
      })
    }

    catch(error)
    {
        console.log(error);
        return error;
    }
}