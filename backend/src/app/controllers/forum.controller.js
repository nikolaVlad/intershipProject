import { createTopic, deleteTopic, editTopic, getAllTopics, getTopic, createPost, getAllPosts, getPost, deletePost, editPost, createComment, getComments, deleteComment, editComment } from "../services/forum.service";

export const postTopic = async (req, res) =>
{
    try
    {

        const result = await createTopic(req.loggedUser.id , req.body.name);

        res.status(200).send({
            message : 'Topic added successfully.',
            id : result.id
        })

    }

    catch(error)
    {
        console.log(error);
        res.status(500).send("Something went wrong");
    }
}


export const getTopics = async (req , res) =>
{
    try
    {
        const result = await getAllTopics();
        res.status(200).send(result);
    }

    catch(error)
    {
        console.log(error);
        res.status(500).send("Something went wrong");
    }
}

export const getOneTopic = async(req , res) =>
{
    try
    {
        const result = await getTopic(req.params.id)
        console.log(result);

        res.status(200).send(result);
    }

    catch(error)
    {
        console.log(error);
        res.status(500).send("Something went wrong");
    }
}

export const editOneTopic = async(req, res) =>
{

    try
    {
        await editTopic(req.params.id, req.body.name);
        res.status(200).send(
            {
                message : 'Topic successffuly updated.'
            }
        )
    }
    catch(error)
    {
        console.log(error);
        res.status(500).send("Something went wrong");
    }
}


export const deleteOneTopic = async(req, res) =>
{
    try
    {
        await deleteTopic(req.params.id)
        res.status(200).send({
            message: 'Topic successfully deleted.',
        });
    }

    catch(error)
    {
        console.log(error);
        res.status(500).send("Something went wrong");
    }
    
}

// Posts
export const postPost = async(req, res) =>
{

    
    try 
    {
        await createPost(req.loggedUser.id , req.body.topicId, req.body.title);
        res.status(201).send('Post added successfully.');
    }
      
      

    catch(error)
    {
        console.log(error);
        res.status(500).send("Something went wrong");
    }
}

export const getPosts = async(req, res) =>
{
    console.log(req.params)
    try
    {
        const result = await getAllPosts(req.params.topicId);
        console.log(result);
        res.send(result);
    }


    catch(error)
    {
        console.log(error);
        res.status(500).send("Something went wrong");
    }
}


export const getOnePost = async(req, res) =>
{

    try
    {
        const result = await getPost(req.params.postId);
        res.send(result);
    }

    catch(error)
    {
        console.log(error);
        res.status(500).send("Something went wrong");
    }
}

export const editOnePost = async(req , res) =>
{   

    try
    {
        await editPost( req.params.postId ,req.body.title);
        res.status(200).send({
            message: 'Post successffuly updated.',
        });
    }

    catch(error)
    {
        console.log(error);
        res.status(500).send("Something went wrong");
    }
}



export const deleteOnePost = async(req, res) =>
{
    try
    {
        await deletePost(req.params.postId);
        res.send({
            message: 'Post successfully deleted.',
        });
    }

    catch(error)
    {
        console.log(error);
        res.status(500).send("Something went wrong");
    }
}

// POSTS-COMMENTS
export const postComment = async(req, res) =>
{
    try
    {
        console.log(req.params.postId);
        await createComment(req.loggedUser.id , req.params.postId, req.body.content);
        res.send(
            {
                message : 'Comment added successfully'
            }
        )
    }

    catch(error)
    {
        console.log(error);
        res.status(500).send("Something went wrong");
    }
}


export const getOneComments = async(req, res) =>
{
    try
    {
        const result = await getComments(req.params.postId);
        res.send(result);  
    }

    catch(error)
    {
        console.log(error);
        res.status(500).send("Something went wrong");
    }
}

export const deleteOneComment = async(req, res) =>
{
    try
    {
        await deleteComment(req.params.id);
        res.send({
            message : 'Comment successfully deleted.'
        })
    }

    catch(error)
    {
        console.log(error);
        res.status(500).send("Something went wrong");
    }
}

export const editOneComment = async (req, res) =>
{
    console.log("Doso");
    try
    {
        await editComment(req.params.id , req.body.content);
        res.send({
            message : 'Comment successfully updated.'
        });
    }

    catch(error)
    {
        console.log(error);
        res.status(500).send("Something went wrong");
    }
}