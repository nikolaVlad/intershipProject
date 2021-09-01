import {Cart} from '../../db/models'

export const create = async (data) =>
{
    return await Cart.create(data);
}


export const get = async (userId) =>
{
    return await Cart.findAll({
        where : {userId : userId}
    })
}


export const destroy = async (userId) =>
{
    return await Cart.destroy(
        {
            where : {userId}
        }
    )
}

export const destroyOne = async (productId) =>
{
    return await Cart.destroy(
        {
            where : {productId}
        }
    )
}