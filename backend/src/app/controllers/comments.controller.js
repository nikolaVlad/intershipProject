import { create, deleteOne, updateOne } from "../services/comment.service";


export const postComment = async (req, res) =>
{
    const{productId , content} = req.body;

    try
    {
        const result = await create(req.loggedUser.id,productId,content);

        res.status(200).send({
            message : 'Comment added successfully!',
            id : result.id
        })
    }

    catch(error)
    {
        console.log(error);
        res.status(500).send("Something went wrong");
    }
}   


export const editComment = async (req, res) =>
{
    const {id, content} = req.body;
    try
    {
        const result = await updateOne(id , content, req.loggedUser.id);

        if(result.error)
        {
            return res.status(405).send(result.error);
        }

        return res.status(200).send({
            message : 'Comment has been updated.',
            id : result.id
        })
    }

    catch(error)
    {
        console.log(error);
        return res.status(500).send("Something went wrong");
    }
}



export const deleteComment = async (req, res) =>
{
    const {id} = req.body;

    try
    {
        const result = await deleteOne(id, req.loggedUser.id);

        if(result.error)
        {
            return res.status(405).send(result.error);
        }

        return res.status(202).send({
            message: 'Comment has been deleted.',
        });
    }

    catch(error)
    {
        console.log(error);
        return res.status(500).send("Something went wrong"); 
    }
}

