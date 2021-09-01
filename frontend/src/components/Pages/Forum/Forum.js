/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from 'react';
import {
    Wrapper,
    PicturePlace,
    ForumPlace,
    SideNav,
    Content,
    Header,
    LinksPlace,
    NewTopicBtn,
    NewPostBtn,
    TopicButton,
    HelloContent,
} from './ForumElements';
import { ForumImg } from '../../Common/GlobalStyles';
import PostContent from './PostContent/PostContent';
import Modal from '../../Common/Modal/Modal';
import TopicContent from './TopicContent/TopicContent';
import { useParams } from 'react-router-dom';
import { observer } from 'mobx-react';
import {createAlert} from '../../Common/Alert/Alert'
import ForumStore from '../../../stores/ForumStore';


const Forum = observer(() => {
    const [isNewTopicModalOpen, setIsNewTopicModalOpen] = useState(false);

    const { topicId, postId } = useParams();

    const [newTopic, setNewTopic] = useState('');


    async function onAccessNewTopicModal()
    {
        if(newTopic.trim() === '')
        {
            return createAlert('Please insert correctly topic name.', 'error');
        }

        await ForumStore.postTopic(newTopic);
        createAlert("Topic added successfully");
        setIsNewTopicModalOpen(false);
    }

    useEffect( async () =>
    {
        await ForumStore.initTopics();
    }, [])

    
    return (
        <Wrapper>
            <PicturePlace src={ForumImg}>
                <Header>
                    <span>
                        Game forum
                        <div></div>
                    </span>
                </Header>
            </PicturePlace>

            {/* Modal for create new Topic */}
            <Modal
                isOpen={isNewTopicModalOpen}
                accessBtnText='Create'
                closeBtnText='Cancel'
                dialogVariant
                name='NewTopicModal'
                onClose={() => {
                    setIsNewTopicModalOpen(false);
                    setNewTopic('');
                }}
                onAccess={() => onAccessNewTopicModal()}
            >
                <label>Topic name : </label>
                <input
                    type='text'
                    onChange={(e) => setNewTopic(e.target.value)}
                    value={newTopic}
                />
            </Modal>

            <ForumPlace>
                <SideNav>
                    <LinksPlace>
                        <NewTopicBtn
                            onClick={() => setIsNewTopicModalOpen(true)}
                        >
                            Create new topic
                        </NewTopicBtn>

                        {ForumStore.topics.length > 0 ? (
                            ForumStore.topics.map((topic) => {
                                return (
                                    <TopicButton
                                        key={topic.id}
                                        to= {`/forum/${topic.id}`}
                                    >
                                        {topic.name}
                                    </TopicButton>
                                );
                            })
                        ) : (
                            <div>No topics</div>
                        )}
                    </LinksPlace>
                </SideNav>

                <Content>
                    {!topicId && !postId && (
                        <HelloContent>
                            Welcome to the Game forum. Have fun :)
                        </HelloContent>
                    )}

                    {topicId && !postId && <TopicContent topicId = {topicId} />}

                    {topicId && postId && <PostContent postId = {postId} topicId = {topicId} />}
                </Content>
            </ForumPlace>
        </Wrapper>
    );
});

export default Forum;
