/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */

import React, { useEffect, useState } from 'react';
import ForumStore from '../../../../stores/ForumStore';
import Modal from '../../../Common/Modal/Modal';
import PostTitleBox from '../PostContent/PostTitleBox';
import {
    Wrapper,
    TopicHead,
    TopicBody,
    TopicName,
    TopicInfo,
    DataInfo,
    AddPostBtn,
} from './TopicContentElements';
import {MdEdit, MdDelete} from 'react-icons/md';
import { useHistory } from 'react-router-dom';
import { createAlert } from '../../../Common/Alert/Alert';
import { observer } from 'mobx-react';
import { getTokenItem } from '../../../../utils/localStorageService';


const TopicContext = observer(({topicId}) => {
    const [isNewPostModalOpen, setIsNewPostModalOpen] = useState(false);
    const [topic , setTopic] = useState({});
    const [isEditTopicModalOpen, setIsEditTopicModalOpen] = useState(false);
    const [isDeleteTopicModalOpen, setIsDeleteTopicModalOpen] = useState(false);
    const [updateTopic , setUpdateTopic] = useState({
        name : ''
    })
    const [postData , setPostData] = useState(
        {
            title : '',
            topicId : ''
        }
    )
    const history = useHistory();
     


    useEffect( async () =>
    {
        const selectedTopic = await ForumStore.getTopic(topicId);
        console.log(topic);
        setTopic(selectedTopic);
        ForumStore.initPosts(topicId);
        console.log(ForumStore.posts.length);
    }, [topicId])


    async function onAccessDeleteModal()
    {
        await ForumStore.deleteTopic(topicId);
        setIsDeleteTopicModalOpen(false);
        history.replace('/forum');
    }


    async function onAccessEditTopicModal()
    {
        if(updateTopic.name.trim() === '')
        {
            return createAlert('Please insert correctly topic name');
        }
        await ForumStore.editTopic( topicId, {name : updateTopic.name});
        await ForumStore.initTopics();
        setIsEditTopicModalOpen(false);
        const selectedTopic = await ForumStore.getTopic(topicId);
        setTopic(selectedTopic);
    }


    async function onAccessNewPostModal()
    {
        if(postData.title.trim() === '')
        {
            return createAlert("Please insert valid post title." , 'error')
        }

        await ForumStore.postPost(postData.title , postData.topicId);
        await ForumStore.initPosts(topicId);
        setIsNewPostModalOpen(false);

    }

    if(JSON.stringify(topic) === JSON.stringify({}))
    {
        return <div>No topic found !</div>
    }


    return (
        <Wrapper>
            <TopicHead>
                {getTokenItem('id') === topic?.userId && (
                    <div
                        style={{
                            display: 'flex',
                            width: '100%',
                            fontSize: '20px',
                            justifyContent: 'start',
                            alignItems: 'center',
                        }}
                    >
                        <MdDelete
                            onClick={() => setIsDeleteTopicModalOpen(true)}
                            style={{
                                cursor: 'pointer',
                                color: '#a82331',
                                marginRight: '30px',
                            }}
                        />
                        |
                        <MdEdit
                            onClick={() => {
                                setIsEditTopicModalOpen(true);
                                setUpdateTopic({ name: topic.name });
                            }}
                            style={{
                                cursor: 'pointer',
                                color: 'yellow',
                                marginLeft: '30px',
                            }}
                        />
                    </div>
                )}
                <TopicName>{topic?.name}</TopicName>
                <div></div>
                <TopicInfo>
                    <div style={{ maxWidth: '250px' }}>
                        Creator :
                        <DataInfo>
                            {topic?.User?.firstName} {topic?.User?.lastName}
                        </DataInfo>
                    </div>
                    <div>
                        Posts :{' '}
                        <DataInfo>{ForumStore.posts.length || 0}</DataInfo>
                    </div>
                    <div>
                        Created At :
                        <DataInfo>{topic.createdAt.slice(0, 10)}</DataInfo>
                    </div>
                </TopicInfo>

                <AddPostBtn
                    onClick={() => {
                        setIsNewPostModalOpen(true);
                        setPostData({ title: '', topicId: topicId });
                    }}
                >
                    + New post
                </AddPostBtn>
            </TopicHead>
            {/* Modal for create new POST ! */}
            <Modal
                isOpen={isNewPostModalOpen}
                accessBtnText='Create'
                closeBtnText='Cancel'
                dialogVariant
                name='NewPostModal'
                onClose={() => setIsNewPostModalOpen(false)}
                onAccess={() => onAccessNewPostModal()}
            >
                <label>Post Title : </label>
                <textarea
                    rows='5'
                    cols='10'
                    value={postData.title}
                    onChange={(e) =>
                        setPostData({ ...postData, title: e.target.value })
                    }
                />
            </Modal>
            {/* Modal for edit Topic */}
            <Modal
                isOpen={isEditTopicModalOpen}
                accessBtnText='Save'
                closeBtnText='Cancel'
                dialogVariant
                name='EditTopicModal'
                onClose={() => setIsEditTopicModalOpen(false)}
                onAccess={() => onAccessEditTopicModal()}
            >
                <label> Name : </label>
                <input
                    type='text'
                    rows='10'
                    value={updateTopic.name}
                    onChange={(e) => setUpdateTopic({ name: e.target.value })}
                />
            </Modal>

            {/* Modal for delete Topic */}
            <Modal
                isOpen={isDeleteTopicModalOpen}
                accessBtnText='Yes'
                closeBtnText='Cancel'
                dialogVariant
                name='DeleteTopicModal'
                onClose={() => setIsDeleteTopicModalOpen(false)}
                onAccess={() => onAccessDeleteModal()}
            >
                Are you sure to delete this topic?
            </Modal>
            <TopicBody>
                {ForumStore.posts.length < 1 ? (
                    <div>No post here.</div>
                ) : (
                    ForumStore.posts.map((post) => {
                        return (
                            <PostTitleBox
                                noActionsVariant
                                className='PostTitleClass'
                                key={post.id}
                                postId={post.id}
                                topicId={topicId}
                            />
                        );
                    })
                )}
            </TopicBody>
        </Wrapper>
    );
});

export default TopicContext;
