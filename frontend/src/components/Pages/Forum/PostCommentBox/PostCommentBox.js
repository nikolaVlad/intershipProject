/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
import {
    Wrapper,
    TitlePlace,
    TextPlace,
    ActionPlace,
    DeleteBtn,
    EditBtn,
    EditTextPlace,
    EditInput,
    SaveBtn,
    CancelBtn,
} from './PostCommentBoxElements';
import { FaEdit } from 'react-icons/fa';
import { MdDelete } from 'react-icons/md';
import Modal from '../../../Common/Modal/Modal';
import { observer } from 'mobx-react';
import ForumStore from '../../../../stores/ForumStore';
import { getTokenItem } from '../../../../utils/localStorageService';

const PostCommentBox = observer(({postComment}) => {
    const [isEdit, setIsEdit] = useState(false);
    const [isOpenDeleteModal, setIsOpenDeleteModal] = useState(false);
    const [editContent, setEditContent] = useState('');


    async function onAccessDeleteModal()
    {
        await ForumStore.deleteOneComment(postComment.id);
        await ForumStore.initComments(postComment.postId);
        setIsOpenDeleteModal(false);
    }


    async function onSaveCommentHandler()
    {
        if(editContent.trim() === '')
        {
            createAlert("Please input correct comment." , 'error');
        }

        await ForumStore.editComment(postComment.id, editContent.trim());
        await ForumStore.initComments(postComment.postId);
        setIsEdit(false);

        
    }



    return (
        <Wrapper>
            <TitlePlace>
                <div>
                    <div>
                        {postComment.User.firstName} {postComment.User.lastName}
                    </div>
                    <div style={{ color: 'gray', fontSize: 'small' }}>
                        {postComment.createdAt.slice(0, 10)}
                    </div>
                </div>
                {getTokenItem('id') === postComment.userId && (
                    <>
                        <ActionPlace>
                            <EditBtn
                                onClick={() => {
                                    setIsEdit(true);
                                    setEditContent(postComment.content);
                                }}
                                className={isEdit && 'active'}
                            >
                                <FaEdit />
                            </EditBtn>
                            <DeleteBtn
                                onClick={() => setIsOpenDeleteModal(true)}
                            >
                                <MdDelete />
                            </DeleteBtn>
                        </ActionPlace>
                        <Modal
                            dialogVariant
                            accessBtnText='Okay'
                            closeBtnText='Cancel'
                            isOpen={isOpenDeleteModal}
                            name='DeleteModal'
                            onAccess={() => {
                                onAccessDeleteModal();
                            }}
                            onClose={() => {
                                setIsOpenDeleteModal(false);
                            }}
                        >
                            Are you sure to delete this comment?
                        </Modal>
                    </>
                )}
            </TitlePlace>

            <TextPlace>
                {!isEdit ? (
                    <span>{postComment.content}</span>
                ) : (
                    <EditTextPlace>
                        <EditInput
                            rows='10'
                            value={editContent}
                            onChange={(e) => setEditContent(e.target.value)}
                        />

                        <SaveBtn onClick={() => onSaveCommentHandler()}>
                            Save
                        </SaveBtn>
                        <CancelBtn onClick={() => setIsEdit(false)}>
                            Cancel
                        </CancelBtn>
                    </EditTextPlace>
                )}
            </TextPlace>
        </Wrapper>
    );
});

export default PostCommentBox;
