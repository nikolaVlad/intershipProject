import React, { useEffect, useState } from 'react';
import {
    Wrapper,
    ContentPlace,
    UserNamePlace,
    ReviewDate,
    ReviewText,
    SeeAllBtn,
    NoLoggedAlert,
    EditCommentPlace,
    SaveBtn,
    CancelBtn,
} from './ReviewComponentElements';

import { IoIosArrowDropdown } from 'react-icons/io';
import AddReviewComponent from '../AddReviewComponent/AddReviewComponent';
import CommentStore from '../../stores/CommentStore';
import { observer } from 'mobx-react';
import { getToken, getTokenItem } from '../../utils/localStorageService';
import { NavLink } from 'react-router-dom';
import { MdDelete, MdModeEdit } from 'react-icons/md';
import Modal  from '../Common/Modal/Modal'
import { createAlert } from '../Common/Alert/Alert';


const ReviewComponent = observer (({ commentsList, productId }) => 
{
    const [lengthComments , setLengthComments] = useState(2); 
   
    const [isEdit , setIsEdit] = useState({
        value : false,
        id : null
    });

    const [isDeleteModal , setIsDeleteModal] = useState(false);

    const [deleteId , setDeleteId] = useState(null);

    // eslint-disable-next-line no-unused-vars
    const [editedComment, setEditedComment] = useState('');




    async function onAccessDeleteModalHandler(id) 
    {
        await CommentStore.delete(id);
        setIsDeleteModal(false);
    }


    async function onSaveBtnHandler(id)
    {
        if(editedComment.trim().length < 1)
        {
            return createAlert('Please insert correctly comment.', 'error');
        }   

        await CommentStore.edit(id , editedComment.trim());
        
        setIsEdit({
            value : false,
            id : null
        })
    }



    useEffect(() => 
    {
        CommentStore.setComments(commentsList);
    }, [commentsList]);


    
    if (CommentStore.comments.length === 0) {
        return (
            <>
                <AddReviewComponent productId = {productId} />
                <h5 style={{ color: 'gray' }}>
                    There are no reviews for this product.
                </h5>
            </>
        );
    }

    return (
        <>
            <Wrapper>
                {getToken() ? (
                    <AddReviewComponent productId={productId} />
                ) : (
                    <NoLoggedAlert>
                        Please{'  '}
                        <NavLink to='/log-in' style={{ color: 'orange' }}>
                            log-in{'  '}
                        </NavLink>
                        to add reviews.
                        <hr style={{ backgroundColor: 'orange' }} />
                    </NoLoggedAlert>
                )}

                {commentsList && CommentStore.comments.length > 0 ? (
                    <>
                        {CommentStore.comments
                            .slice(0, lengthComments)
                            .map((comment, index) => {
                                return (
                                    <span key={index}>
                                        <ContentPlace>
                                            <UserNamePlace>
                                                <a>{comment.name}</a>
                                            </UserNamePlace>

                                            {comment.userId ===
                                                getTokenItem('id') && (
                                                <div
                                                    style={{
                                                        marginBottom: '15px',
                                                    }}
                                                >
                                                    <MdModeEdit
                                                        color='orange'
                                                        style={{
                                                            cursor: 'pointer',
                                                        }}
                                                        onClick={() =>
                                                            {
                                                                setIsEdit({
                                                                    value: true,
                                                                    id: comment.id,
                                                                })

                                                                setEditedComment(comment.comment);
                                                            }
                                                           
                                                        }
                                                    />{' '}
                                                    <MdDelete
                                                        onClick={() =>
                                                            {
                                                                setDeleteId(comment.id);
                                                                setIsDeleteModal(true);
                                                            }
                                                        }
                                                        style={{
                                                            cursor: 'pointer',
                                                        }}
                                                        color='#cf221f'
                                                    />{' '}
                                                </div>
                                            )}

                                            <ReviewDate>
                                                {comment.date}
                                            </ReviewDate>

                                            {isEdit.value &&
                                            isEdit.id === comment.id ? (
                                                <EditCommentPlace>
                                                    <textarea
                                                        cols={50}
                                                        rows={8}
                                                        onChange = {(e) => setEditedComment(e.target.value)}
                                                        value = {editedComment}
                                                    >
                                                        
                                                    </textarea>
                                                    <SaveBtn onClick = {() => onSaveBtnHandler(isEdit.id)}> save </SaveBtn>
                                                    <CancelBtn
                                                        onClick={() =>
                                                            setIsEdit({
                                                                value: false,
                                                                id: null,
                                                            })
                                                        }
                                                    >
                                                        cancel
                                                    </CancelBtn>
                                                </EditCommentPlace>
                                            ) : (
                                                <ReviewText>
                                                    {comment.comment}
                                                </ReviewText>
                                            )}
                                        </ContentPlace>
                                    </span>
                                );
                            })}

                        <Modal
                            accessBtnText='Delete'
                            closeBtnText='Cancel'
                            onClose={() => setIsDeleteModal(false)}
                            dialogVariant
                            isOpen={isDeleteModal}
                            name='DeleteModal'
                            onAccess={() =>
                                onAccessDeleteModalHandler(deleteId)
                            }
                        >
                            <div>Are you sure to delete this comment ?</div>
                        </Modal>

                        <SeeAllBtn
                            onClick={() =>
                                setLengthComments(CommentStore.comments.length)
                            }
                            isHidden={lengthComments > 2 ? true : false}
                        >
                            <IoIosArrowDropdown /> See all
                        </SeeAllBtn>
                    </>
                ) : (
                    <h5 style={{ color: 'gray' }}>
                        There are no reviews for this product.
                    </h5>
                )}
            </Wrapper>
        </>
    );
})

export default ReviewComponent;
