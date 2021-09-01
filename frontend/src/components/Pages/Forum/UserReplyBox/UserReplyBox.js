import { observer } from 'mobx-react'
import React, { useState } from 'react'
import ForumStore from '../../../../stores/ForumStore';
import { createAlert } from '../../../Common/Alert/Alert';
import { Wrapper, TextAreaComment, AddBtn } from './UserReplyBoxElements'

const UserReplyBox = observer(({postId}) => {

    const [content , setContent] = useState('');


    async function onClickAddCommentHandler()
    {
        if(content.trim() === '')
        {
            return createAlert('Please insert valid comment.' , 'error')
        }

        await ForumStore.postComment(postId , content);
        setContent('');
        await ForumStore.initComments(postId);
    }




    return (
        <Wrapper>
            <div>
                <TextAreaComment
                    rows='7'
                    placeholder='Enter your comment'
                    value = {content}
                    onChange = {(e) => setContent(e.target.value)}
                ></TextAreaComment>
            </div>

            <div>
                <AddBtn onClick = {() => onClickAddCommentHandler()}>Add</AddBtn>
            </div>
        </Wrapper>
    );
});

export default UserReplyBox
