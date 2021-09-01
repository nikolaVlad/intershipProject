import React, { useEffect } from 'react';
import { Wrapper } from './PostContentElements';
import PostCommentBox from '../PostCommentBox/PostCommentBox';

import UserReplyBox from '../UserReplyBox/UserReplyBox';
import PostTitleBox from './PostTitleBox';
import { observer } from 'mobx-react';
import ForumStore from '../../../../stores/ForumStore';

const PostContent = observer(({topicId ,postId}) => {

    useEffect( async() =>
    {
        await ForumStore.initComments(postId);
    }, [postId])

    if(ForumStore.postComments.length < 1)
    {
        return <div>No comment here.
              <UserReplyBox postId = {postId} />
        </div>
    }

    return (
        <Wrapper>
            <PostTitleBox topicId = {topicId} postId = {postId}/>

            {/* Place for comments */}
            {ForumStore.postComments.map(postComment =>
                {
                    return (
                        <PostCommentBox
                            key={postComment.id}
                            postComment={postComment}
                        />
                    );
                })}
            
            <hr style={{ backgroundColor: 'gray', margin: '20px' }} />
            <UserReplyBox postId = {postId} />
        </Wrapper>
    );
});

export default PostContent;
