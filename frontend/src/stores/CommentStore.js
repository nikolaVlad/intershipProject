import { action, makeObservable, observable } from "mobx";
import {getTokenItem} from '../utils/localStorageService';
import {deleteComment, editComment, postComment} from '../actions/comments';
import { createAlert } from "../components/Common/Alert/Alert";


class Comment 
{

    @observable comments = [];

    constructor() {
        makeObservable(this);
    }

  
 
    @action setComments(value)
    {
        this.comments = value;
    }


    
    @action async add(productId,comment)
    {
        // eslint-disable-next-line no-unused-vars
        const result = await postComment(productId , comment);

        // Added comment in store
        this.setComments([{
            id : result.id,
            name : getTokenItem('name'),
            comment,
            userId : getTokenItem('id')
        } , ...this.comments]);
       
        createAlert(result.message);
    }


    @action async edit(id , content)
    {

        const result = await editComment(id, content);

        console.log(result);

        this.setComments(
            this.comments.map((comment) => {
                if (comment.id === id) {
                    return {
                        ...comment,
                        comment: content,
                    };
                }

                return comment;
            })
        );

        createAlert(result.message);
    }


    @action async delete(id)
    {
        const result = await deleteComment(id);

        this.setComments(this.comments.filter(comment => comment.id != id))
        
        createAlert(result.message);
    }
    

}

let CommentStore = new Comment();

export default CommentStore;