import { UserProduct } from '../../db/models';

export const get = async (userId) =>
{
    return await UserProduct.findAll({
        where: { userId: userId },
    });
}