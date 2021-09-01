import {action,makeObservable, observable } from "mobx";
import {postTopic as createTopic, getTopics, getOneTopic, deleteOneTopic, editOneTopic, postOnePost, getPosts, getPost, deleteOnePost, postOneComment, getOnePostComments, deleteOnePostComment, editOnePostComment} from '../actions/forum'
import { editPost } from "../api";
import { createAlert } from "../components/Common/Alert/Alert";


class ForumStore 
{

    @observable topics = [];

    @observable posts = []

    @observable postComments = [];

    constructor() {
        makeObservable(this);
    }

    @action setTopics(value)
    {
        return this.topics = value;
    }

    @action async postTopic(name)
    {
        await createTopic(name);
        await this.initTopics();
    }

    
    @action async getTopic(id)
    {
        return await getOneTopic(id);
    }

    @action async initTopics()
    {
        const result = await getTopics();
        this.setTopics(result);
        console.log(this.topics);
    }

    @action async editTopic(id, data)
    {
        await editOneTopic(id, data);
        createAlert("Topic successfully updated.");
    }

    @action async deleteTopic(id)
    {
        const result = await deleteOneTopic(id);
        await this.initTopics();
        createAlert(result.message);
    }


    // POSTS
    @action setPosts(value)
    {
        this.posts = value;
    }

    @action async postPost(title , topicId)
    {
        await postOnePost(title , topicId);
        createAlert("Post added");
    }

    @action async initPosts(topicId)
    {
        const result = await getPosts(topicId);
        this.setPosts(result);
    }   

    @action async getOnePost(topicId, postId)
    {
        const result = await getPost(topicId , postId);
        return result;
    }

    @action async editOnePost(topicId , postId , title)
    {
        await editPost(topicId , postId, title);
        createAlert("Post successfully updated.");
    }
    
    @action async deletePost(topicId , postId)
    {
        const result = await deleteOnePost(topicId, postId);
        await this.initPosts()
        createAlert(result.message);
    }



    // POST-COMMENTS
    @action setComments(value)
    {
        this.postComments = value;
    }


    @action async postComment(postId , content)
    {
        await postOneComment(postId , content);
        createAlert("Comment added");
    }

    @action async initComments(postId)
    {
        const result = await getOnePostComments(postId)
        this.setComments(result);
    }

    
    @action async editComment(id , content)
    {
        await editOnePostComment(id , content);
        createAlert('Comment successfully updated.');
    }



    @action async deleteOneComment(id)
    {
        await deleteOnePostComment(id);
        createAlert('Comment successfully deleted.');
    }



}

export default new ForumStore();
