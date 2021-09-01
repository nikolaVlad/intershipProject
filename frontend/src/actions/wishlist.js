import * as api from '../api';


// put one product in wishlist
export const postWishlistProduct = async (id) =>
{
    try
    {
        const result = await api.postWishlistProduct(id);
        return result;
    }

    catch(error)
    {
        console.log(error);
    }
}

// get all product from wishlist
export const getWishlist = async () =>
{
    try
    {
        const result = await api.getWishlist();
        return result;
    }

    catch(error)
    {
        console.log(error);
    }
}

// Remove product 
export const deleteWishlistProduct = async (id) =>
{
    try
    {
        const result = await api.deleteWishlistProduct(id);
        return result;
    }

    catch(error)
    {
        console.log(error);
    }
}

export const destroyWishlist =  async() =>
{
    try
    {
        const result = await api.destroyWishlist();
        return result;
    }

    catch(error)
    {
        console.log(error);
    }
}