import { Comment } from '../../db/models';
import { User } from '../../db/models';

export const create = async (userId, productId, content) => {
    return await Comment.create({
        userId,
        productId,
        content,
    });
};

export const getAll = async (productId) => {

    return await Comment.findAll({
        where: { productId },
        include :  User 
    });
};


export const updateOne = async (id , content, creatorId) =>
{
    const comment = await Comment.findOne({
        where: { id },
    });

    if(creatorId !== comment.userId)
    {
        return {
            error:
            {
                message : 'Request not allowed!'
            }
        }
    }


    comment.content = content;

    return comment.save();
}



export const deleteOne = async (id, creatorId) =>
{
    const comment = await Comment.findOne({
        where: { id },
    });

    if(creatorId !== comment.userId)
    {
        return {
            error:
            {
                message : 'Request not allowed!'
            }
        }
    }

    return await Comment.destroy({
        where: { id },
    });
}