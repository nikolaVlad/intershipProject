import React, { useEffect, useState } from 'react';
import { PostDetails, PostTitle, TitleText } from './PostContentElements';
import {
    ActionPlace,
    EditBtn,
    DeleteBtn,
} from '../PostCommentBox/PostCommentBoxElements';
import { FaEdit } from 'react-icons/fa';
import { MdDelete } from 'react-icons/md';
import Modal from '../../../Common/Modal/Modal';
import PropTypes from 'prop-types';
import LinkComponent from '../../../Styled/LinkComponent';
import { observer } from 'mobx-react';
import ForumStore from '../../../../stores/ForumStore';
import { useHistory } from 'react-router-dom';
import { createAlert } from '../../../Common/Alert/Alert';
import { getTokenItem } from '../../../../utils/localStorageService';

// eslint-disable-next-line react/prop-types
const PostTitleBox = observer(({ className, noActionsVariant, topicId, postId }) => {
    const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);
    const [isEditModalOpen, setIsEditModalOpen] = useState(false);
    const [post , setPost] = useState({})
    const [updatePostData , setUpdatePostData] = useState({
        title : '',
        topicId : ''
    })
    const history = useHistory();

    useEffect( async() =>
    {
        const result = await ForumStore.getOnePost(topicId , postId);
        setPost(result);
        console.log(result);
        
    }, [])


    async function onAccessDeletePostModal()
    {
        await ForumStore.deletePost(topicId , postId);
        setIsDeleteModalOpen(false);
        history.push(`/forum/${topicId}`);
    }

    async function onAccessEditPostModal()
    {
    
        if(updatePostData.title.trim() === '')
        {
            return createAlert("Please fill corectly title of post" , 'error');
        }

        await ForumStore.editOnePost(topicId , postId, updatePostData.title.trim());
        await ForumStore.initPosts();
        setIsEditModalOpen(false);
        const result = await ForumStore.getOnePost(topicId , postId);
        setPost(result);
    }


    return (
        <PostTitle className={className}>
            <TitleText>
                <LinkComponent
                    color={'white'}
                    hovercolor='gray'
                    to={`/forum/${topicId}/${postId}`}
                >
                    {post?.title}
                </LinkComponent>
            </TitleText>

            {!noActionsVariant && (
                <>
                    {getTokenItem('id') === post.userId && (
                        <>
                            <ActionPlace
                                style={{
                                    justifyContent: 'center',
                                    display: 'flex',
                                }}
                            >
                                <EditBtn
                                    onClick={() => {
                                        setIsEditModalOpen(true);
                                        setUpdatePostData({
                                            title: post.title,
                                            topicId: topicId,
                                        });
                                    }}
                                >
                                    <FaEdit />
                                </EditBtn>

                                <DeleteBtn
                                    onClick={() => setIsDeleteModalOpen(true)}
                                >
                                    <MdDelete />
                                </DeleteBtn>
                            </ActionPlace>

                            {/* Modal for change post name */}
                            <Modal
                                name='EditPostModal'
                                accessBtnText='Save'
                                closeBtnText='Cancel'
                                dialogVariant
                                isOpen={isEditModalOpen}
                                onClose={() => setIsEditModalOpen(false)}
                                onAccess={() => onAccessEditPostModal()}
                            >
                                <label>Post title : </label>
                                <input
                                    type='text'
                                    value={updatePostData.title}
                                    onChange={(e) =>
                                        setUpdatePostData({
                                            ...updatePostData,
                                            title: e.target.value,
                                        })
                                    }
                                ></input>
                            </Modal>

                            {/* Modal for delete post */}
                            <Modal
                                name='DeleteTopicModal'
                                accessBtnText='Delete'
                                closeBtnText='Cancel'
                                dialogVariant
                                isOpen={isDeleteModalOpen}
                                onClose={() => setIsDeleteModalOpen(false)}
                                onAccess={() => onAccessDeletePostModal()}
                            >
                                Are you sure to delete this post?
                            </Modal>
                        </>
                    )}
                </>
            )}
            <PostDetails>
                <div>
                    Creator :{' '}
                    <span>
                        {' '}
                        {post?.User?.firstName} {post?.User?.lastName}
                    </span>
                </div>

                <div>
                    Created at : <span>{post?.createdAt?.slice(0, 10)}</span>
                </div>
            </PostDetails>
        </PostTitle>
    );
});

PostTitleBox.propTypes = {
    className: PropTypes.string,
};

export default PostTitleBox;
