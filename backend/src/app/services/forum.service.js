import {Topic} from '../../db/models';
import {User} from '../../db/models';
import {Post} from '../../db/models';
import {PostComment} from '../../db/models'

// TOPICS
export const createTopic = async (creatorId , name) => 
{
    return await Topic.create({
        userId : creatorId,
        name
    })

};

export const getAllTopics = async () =>
{
    return await Topic.findAll();
}

export const getTopic = async(id) =>
{
    return await Topic.findOne(
        {
            where : {id},
            include : User
        }
    )
}


export const editTopic = async(id, name) =>
{
    const topic = await getTopic(id)

    topic.name = name;

    return topic.save();
}


export const deleteTopic = async(id) =>
{
    return await Topic.destroy(
        {
            where : {id}
        }
    )
}

// POSTS
export const createPost = async (creatorId , topicId, title) => 
{
    return await Post.create({
      userId : creatorId,
      topicId,
      title
    });
  };

  export const getAllPosts = async(topicId) =>
  {
      return await Post.findAll(
          {
              where : {topicId}
          }
      )
  }

  export const getPost = async(postId) =>
  {
    return await Post.findOne(
        {
            where : {id : postId},
            include : User
        }
    )
  }

export const editPost = async(postId , title) =>
{
    const post = await getPost(postId);

    post.title = title;

    return post.save();
}



  export const deletePost = async(postId) =>
  {
      return await Post.destroy({
          where : {id : postId}
      })
  }


// POST-COMMENTS
export const createComment = async (creatorId , postId, content) => 
{
    return await PostComment.create({
        content,
        userId : creatorId,
        postId
    });
  };

  export const getComments = async(postId) =>
  {
      return await PostComment.findAll({
          where : {postId},
          include : User
      })
  }

  export const editComment = async(id , content) =>
  {
        const comment = await PostComment.findOne({
            where : {id}
        })

        console.log(comment);

        comment.content = content;

        return comment.save();
  }



  export const deleteComment = async(id) =>
  {
      return await PostComment.destroy({
          where: { id },
      });
  }

  