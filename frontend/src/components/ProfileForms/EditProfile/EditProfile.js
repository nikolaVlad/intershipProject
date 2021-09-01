import React, { useState } from 'react';
import {
    ActionbtnEdit,
    ProfileActions,
    ProfileCard,
    ProfileData,
} from '../ViewProfile/ViewProfileElements';
import { ActionbtnCancel, EditForm, Wrapper } from './EditProfileElements';
import PropTypes from 'prop-types';
import validate from '../../../utils/validate';
import { updatePassword, updateUser } from '../../../actions/user';
import updateUserSchema from '../../../rules/updateUser.schema';
import { FiEdit } from 'react-icons/fi';
import Modal from '../../Common/Modal/Modal';
import updatePasswordSchema from '../../../rules/updatePassword.schema';
import { createAlert } from '../../Common/Alert/Alert';




const EditProfile = ({ onClickCancelBtn, profileData }) => {

    const [changedProfileData, setChangedProfileData] = useState({
        ...profileData,
        birthdate : new Date(profileData.birthdate).toJSON().slice(0,10)
    });

    const [changePasswordData, setChangePasswordData] = useState({
        password: '',
        newPassword: '',
    });

    const [error, setError] = useState({
        message: '',
        label: '',
    });

    const [isChangePassModal , setIsChangePassModal] = useState(false);

    async function onAcessCangePassModal()
    {
        let error = validate(changePasswordData, updatePasswordSchema);
        if(error)
        {
            setError(error);
            return createAlert('Please fill all fields corectly.' , 'error')
        }

        try
        {
            let result = await updatePassword(changePasswordData);
            createAlert(result.message);
            onClickCancelBtn();
            return
        }

        catch(error)
        {
           return setError(error.details);
        }
        
    }


    async function onSubmitHandler(e) {

        

        e.preventDefault();
        delete changedProfileData['id'];
        delete changedProfileData['email'];
        delete changedProfileData['createdAt'];
        delete changedProfileData['updatedAt'];
        delete changedProfileData['password'];

        let error = validate(changedProfileData, updateUserSchema);

        if (error) {
            setError(error);
            return createAlert('Please fill all fields correcty.', 'error');
        }

        try
        {
            
            const data = await updateUser(changedProfileData);
            createAlert(data.message);
            onClickCancelBtn();
        }

        catch(error)
        {
            console.log(error);
            alert('ne readi');
        }
        
    }

    function onChangeHandler(e) {

        if(error.label === e.target.name)
        {
            setError('');
        }


        setChangedProfileData({
            ...changedProfileData,
            [e.target.name]: e.target.value,
        });
    }


    function onChangeHandlerPasswords(e) 
    {
        if(error.label === e.target.name)
        {
            setError('');
        }

        setChangePasswordData({
            ...changePasswordData,
            [e.target.name] : e.target.value
        })
    }





    return (
        <Wrapper>
            <ProfileCard>
                <div
                    style={{
                        justifyContent: 'center',
                        display: 'flex',
                        backgroundColor: '#171717',
                        padding: '20px 0px',
                    }}
                >
                    Edit profile
                </div>
                <ProfileData>
                    <EditForm>
                        <div>
                            <div>Name </div>{' '}
                            <input
                                name='firstName'
                                onChange={onChangeHandler}
                                type='text'
                                value={changedProfileData.firstName}
                                className={
                                    error.label === 'firstName' ? 'errorField' : ''
                                }
                            />
                        </div>

                        <div>
                            <div>Last Name </div>{' '}
                            <input
                                name='lastName'
                                onChange={onChangeHandler}
                                type='text'
                                value={changedProfileData.lastName}
                                className={
                                    error.label === 'lastName' ? 'errorField' : ''
                                }
                            />
                        </div>

                        <div>
                            <div>Bio </div>
                            <input
                                name='bio'
                                onChange={onChangeHandler}
                                type='text'
                                value={changedProfileData.bio}
                            />
                        </div>

                        <div>
                            <div>Birthdate </div>{' '}
                            <input
                                name='birthdate'
                                onChange={onChangeHandler}
                                type='date'
                                value={changedProfileData.birthdate}
                                className={
                                    error.label === 'birthdate' ? 'errorField'   : ''
                                }
                            />
                        </div>

                        <div>
                            <div>Email </div>{' '}
                            <div style={{ color: 'gray' }}>
                                {changedProfileData.email}
                            </div>
                        </div>

                        <div>
                            <div>Credit Card </div>{' '}
                            <input
                                name='creditCard'
                                onChange={onChangeHandler}
                                type='text'
                                value={changedProfileData.creditCard}
                                className={
                                    error.label === 'creditCard' ? 'errorField'   : ''
                                }
                            />
                        </div>

                        <div>
                            <div>Country </div>
                            <input
                                name='country'
                                onChange={onChangeHandler}
                                type='text'
                                value={changedProfileData.country}
                                className={
                                    error.label === 'country' ? 'errorField'   : ''
                                }
                            />
                        </div>
                    </EditForm>
                    <div
                        style={{
                            marginLeft: '20px',
                            borderTop: '1px solid #595959',
                        }}
                    >
                        <div>Password</div>

                        <FiEdit
                            style={{
                                color: 'orange',
                                fontSize: '55px',
                                cursor: 'pointer',
                            }}
                            onClick={() => setIsChangePassModal(true)}
                        />
                    </div>
                </ProfileData>

                <ProfileActions>
                    <ActionbtnEdit
                        type='submit'
                        style={{ width: '120px' }}
                        onClick={onSubmitHandler}
                    >
                        Save
                    </ActionbtnEdit>{' '}
                    <ActionbtnCancel
                        style={{ width: '120px' }}
                        onClick={() => onClickCancelBtn()}
                        hovercolor='gray'
                    >
                        Cancel
                    </ActionbtnCancel>
                </ProfileActions>
            </ProfileCard>

            <Modal
                isOpen={isChangePassModal}
                accessBtnText='Save'
                closeBtnText='Cancel'
                dialogVariant
                name='ChangePassModal'
                onClose={() => setIsChangePassModal(false)}
                onAccess={() => onAcessCangePassModal()}
            >
                <form>
                    <label>Old password : </label>
                    <input
                        type='password'
                        name='password'
                        onChange={onChangeHandlerPasswords}
                        value={changePasswordData.password}
                    />
                    <div style = {{color : '#c90000'}}>{error.label === 'password' ? error.message   : ''}</div>
                    
                    <hr />


                    <p>New password</p>
                    <input
                        type='password'
                        name='newPassword'
                        onChange={onChangeHandlerPasswords}
                        value={changePasswordData.newPassword}
                        style = {{width : '500px'}}
                    />
                    <div style = {{color : '#c90000'}}>{error.label === 'newPassword' ? error.message   : ''}</div>
                </form>
            </Modal>
        </Wrapper>
    );
};

EditProfile.propTypes = {
    onClickCancelBtn: PropTypes.func,
    profileData: PropTypes.object,
};

export default EditProfile;
