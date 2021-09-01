import * as api from '../api';

export const postComment = async (productId, content) =>
{
    try
    {
        const result = await api.postComment(productId , content);
        return result;
    }

    catch(error)
    {
        console.log(error);
    }
}


export const editComment = async(id, content) =>
{
    try
    {
        const result = await api.editComment(id , content);
        return result;
    }

    catch(error)
    {
        console.log(error);
    }
}




export const deleteComment = async (id) =>
{
    try
    {
        const result = await api.deleteComment(id);
        return result;
    }

    catch(error)
    {
        console.log(error);
    }
}