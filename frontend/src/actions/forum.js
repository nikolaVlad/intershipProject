import * as api from '../api';

export const postTopic = async (name) =>
{
    try
    {
        const result = await api.postTopic(name);
        return result;
    }

    catch(error)
    {
        console.log(error);
    }
}

export const getTopics = async() =>
{
    try
    {
        const result = await api.getTopics();
        return result;
    }

    catch(error)
    {
        console.log(error);
    }
}

export const getOneTopic = async (id) =>
{
    try
    {
        const result = await api.getTopic(id);
        return result;
    }
    catch(error)
    {
        console.log(error);
    }
}


export const editOneTopic = async(id, data) =>
{
    try
    {
        return await api.editTopic(id , data);
    }

    catch(error)
    {
        console.log(error);
    }
}





export const deleteOneTopic = async(id) =>
{
    try
    {
        return await api.deleteTopic(id);
    }

    catch(error)
    {
        console.log(error);
    }
}

// POSTS
export const postOnePost = async(title , topicId) =>
{
    try
    {
        return await api.postPost(title , topicId);
    }

    catch(error)
    {
        console.log(error);
    }
}

export const getPosts = async(topicId) =>
{
    try
    {
        return await api.getPosts(topicId);
    }

    catch(error)
    {
        console.log(error);
    }
}

export const getPost = async (topicId, postId) =>
{
    try
    {
        return await api.getPost(topicId, postId);
    }


    catch(error)
    {
        console.log(error);
    }
}

export const editOnePost = async (topicId , postId , title) =>
{
    try
    {
        return await api.editPost(topicId, postId, title);
    }


    catch(error)
    {
        console.log(error);
    }
}


export const deleteOnePost = async (topicId, postId) =>
{
    try
    {
        return await api.deletePost(topicId, postId);
    }


    catch(error)
    {
        console.log(error);
    }
}

// POST-COMMENTS
export const postOneComment = async(postId , content) =>
{
    try
    {
        return await api.postPostComment(postId, content);
    }


    catch(error)
    {
        console.log(error);
    }
}

export const getOnePostComments = async(postId) =>
{
    try
    {
        return await api.getPostComments(postId);
    }

    catch(error)
    {
        console.log(error);
    }
}

export const editOnePostComment = async(id , content) =>
{
    try
    {
        return await api.editPostComment(id, content);
    }


    catch(error)
    {
        console.log(error);
    }
}





export const deleteOnePostComment = async(id) =>
{
    try
    {
        return await api.deletePostComment(id);
    }


    catch(error)
    {
        console.log(error);
    }
}