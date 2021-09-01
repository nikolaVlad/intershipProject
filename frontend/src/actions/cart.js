import * as api from '../api';


// put one product in cart
export const postCartProduct = async (id) =>
{
    try
    {
        const result = await api.postCartProduct(id);
        return result;
    }

    catch(error)
    {
        console.log(error);
    }
}


// get all product from cart
export const getCart = async () =>
{
    try
    {
        const result = await api.getCart();
        return result;
    }

    catch(error)
    {
        console.log(error);
    }
    
}



// delete one product in cart
export const deleteCartProduct = async (id) =>
{
    try
    {
        const result = await api.deleteCartProduct(id);
        return result;
    }

    catch(error)
    {
        console.log(error);
    }
}

// delete all product in cart
export const destroyCart = async () =>
{
    try
    {
        const result = await api.destroyCart();
        return result;
    }

    catch(error)
    {
        console.log(error);
    }
}