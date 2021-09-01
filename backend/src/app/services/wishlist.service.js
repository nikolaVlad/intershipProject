import {Wishlist} from '../../db/models'

export const create = async (data) =>
{
    return await Wishlist.create(data);
}


export const get = async (userId) =>
{
    return await Wishlist.findAll({
        where : {userId}
    })
}


export const destroyOne = async (productId) =>
{
    return await Wishlist.destroy(
        {
            where : {productId}
        }
    )
}

export const destroy = async (userId) =>
{
    return await Wishlist.destroy(
        {
            where : {userId}
        }
    )
}