import React, { useState } from 'react';
import {
    ActionbtnDelete,
    ActionbtnEdit,
    DataDiv,
    ProfileActions,
    ProfileCard,
    ProfileData,
} from './ViewProfileElements';
import PropTypes from 'prop-types';
import Modal from '../../Common/Modal/Modal';
import { deleteUser } from '../../../actions/user';
import onDelete from '../../../utils/events/onDelete';
import { useHistory } from 'react-router-dom';

const ViewProfile = ({ onClickEditBtn, profileData}) => {


    const history = useHistory();
    const [isDeleteProfileModelOpen, setIsDeleteProfileModelOpen] = useState(false);

    async function onAccessDeleteProfileModal()
    {
        setIsDeleteProfileModelOpen(false);
        await deleteUser();
        onDelete();
        history.push('/log-in');
    }




    return (
        <ProfileCard>
            <div
                style={{
                    justifyContent: 'center',
                    display: 'flex',
                    backgroundColor: '#171717',
                    padding: '20px 0px',
                }}
            >
                My Profile
            </div>
            <ProfileData>
                <div>
                    <div> Name </div> <DataDiv>{profileData.firstName }</DataDiv>
                </div>

                <div>
                    <div> Last Name </div> <DataDiv>{profileData.lastName}</DataDiv>
                </div>

                <div>
                    <div> Bio </div> {profileData.bio ? <DataDiv>{profileData.bio || <span>No bio</span>}</DataDiv> : <div style = {{color : 'gray'}}>None</div>} 
                </div>

                <div>
                    <div> Birthdate </div> <DataDiv>{profileData.birthdate.slice(0,10)}</DataDiv>
                </div>

                <div>
                    <div> Email </div> <DataDiv>{profileData.email}</DataDiv>
                </div>

                <div>
                    <div> Credit Card </div> <DataDiv>{profileData.creditCard}</DataDiv>
                </div>

                <div>
                    <div> Country </div> <DataDiv>{profileData.country}</DataDiv>
                </div>
            </ProfileData>
            <ProfileActions>
                <ActionbtnEdit onClick={() => onClickEditBtn()}>
                    Edit profile
                </ActionbtnEdit>
                <ActionbtnDelete
                    onClick={() => setIsDeleteProfileModelOpen(true)}
                >
                    Delete profile
                </ActionbtnDelete>
            </ProfileActions>

            {/* Modal for delete profile */}
            <Modal
                accessBtnText='Delete'
                closeBtnText='Cancel'
                isOpen={isDeleteProfileModelOpen}
                onAccess={() => onAccessDeleteProfileModal()}
                onClose={() => setIsDeleteProfileModelOpen(false)}
                dialogVariant
            >
                Are you sure to <b style = {{color: 'darkred'}}>delete</b> your account?
            </Modal>
        </ProfileCard>
    );
};

ViewProfile.propTypes = {
    onClickEditBtn: PropTypes.func,
    onClickDeleteBtn: PropTypes.func,
    profileData : PropTypes.object
};

export default ViewProfile;
