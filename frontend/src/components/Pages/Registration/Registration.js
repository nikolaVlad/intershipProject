import React, { useState } from 'react';
import { NavLink, Redirect } from 'react-router-dom';
import {
    FormWrapper,
    Wrapper,
    RegBtn,
    IconDiv,
    FormRow,
} from './RegistrationElements';
import { FaUserCircle } from 'react-icons/fa';
import { signup } from '../../../actions/auth';
import { useHistory } from 'react-router';
import { getToken, setToken } from '../../../utils/localStorageService';
import Input from '../../Common/Input/Input';
import signupSchema from '../../../rules/signup.schema';
import validate from '../../../utils/validate';

const Registration = () => {
    const history = useHistory();

    // POINT : Promeniti da sve bude okej.
    const [userData, setUserData] = useState({
        firstName: '',
        lastName: '',
        email: '',
        password: '',
        creditCard: '',
        country: '',
        bio: '',
        birthdate: '',
    });



    const [error, setError] = useState({
        message: '',
        label: '',
    });

    function onChangeHandler(e) {
        setUserData({
            ...userData,
            [e.target.name]: e.target.value,
        });

        if(e.target.name === error.label)
        {
            setError({});
        }
    }

    async function onSubmitHandler(e) {
        e.preventDefault();

        let error = validate(userData, signupSchema);

        if (error) {
            return setError(error);
        }

        try
        {
            let result = await signup(userData);
            setToken(result.token);
            return history.replace('/profile');
        }

        catch(err)
        {
           

           setError(
               {
                   message : err.details.message,
                   label : err.details.label
               }
           )
        }
      
    }

    if(getToken())
    {
        return <Redirect to = '/' />    
    }


    return (
        <Wrapper>
            <FormWrapper>
                <IconDiv>
                    <FaUserCircle />{' '}
                </IconDiv>
                <form onSubmit={onSubmitHandler}>
                    <FormRow style={{ marginTop: '40px' }}>
                        <Input
                            name='firstName'
                            placeholder='First Name'
                            type='text'
                            error={error.label === 'firstName'}
                            message={error.message || ''}
                            style={{ margin: '5px 20px' }}
                            value={userData.firstName}
                            onChange={onChangeHandler}
                        />
                        <Input
                            name='lastName'
                            placeholder='Last Name'
                            type='text'
                            error={error.label === 'lastName'}
                            message={error.message || ''}
                            style={{ margin: '5px 20px' }}
                            value={userData.lastName}
                            onChange={onChangeHandler}
                        />
                    </FormRow>

                    <FormRow style={{ marginTop: '40px' }}>
                        <Input
                            name='email'
                            placeholder='Email'
                            type='Email'
                            error={error.label === 'email'}
                            message={error.message || ''}
                            style={{ margin: '5px 20px' }}
                            value={userData.email}
                            onChange={onChangeHandler}
                        />
                        <Input
                            name='password'
                            placeholder='Password'
                            type='Password'
                            error={error.label === 'password'}
                            message={error.message || ''}
                            style={{ margin: '5px 20px' }}
                            value={userData.password}
                            onChange={onChangeHandler}
                        />
                    </FormRow>

                    <FormRow style={{ marginTop: '40px' }}>
                        <Input
                            name='creditCard'
                            placeholder='Credit Card'
                            type='number'
                            error={error.label === 'creditCard'}
                            message={error.message || ''}
                            style={{ margin: '5px 20px' }}
                            value={userData.creditCard}
                            onChange={onChangeHandler}
                        />
                        <Input
                            name='country'
                            placeholder='Country'
                            type='text'
                            error={error.label === 'country'}
                            message={error.message || ''}
                            style={{ margin: '5px 20px' }}
                            value={userData.country}
                            onChange={onChangeHandler}
                        />
                    </FormRow>

                    <FormRow style={{ marginTop: '40px' }}>
                        <Input
                            name='bio'
                            placeholder='Bio'
                            type='text'
                            error={error.label === 'bio'}
                            message={error.message || ''}
                            style={{ margin: '5px 20px' }}
                            value={userData.bio}
                            onChange={onChangeHandler}
                        />
                        <Input
                            name='birthdate'
                            placeholder='Birthdate'
                            type='date'
                            error={error.label === 'birthdate'}
                            message={error.message || ''}
                            style={{ margin: '5px 20px' }}
                            value={userData.birthdate}
                            onChange={onChangeHandler}
                        />
                    </FormRow>

                    <RegBtn type='submit'>Register</RegBtn>
                </form>

                <div
                    style={{
                        color: 'gray',
                        fontSize: '16px',
                        marginTop: '30px ',
                        textAlign: 'center',
                    }}
                >
                    You already have an account.{' '}
                    <NavLink to='/log-in' style={{ color: 'orange' }}>
                        Log in...{' '}
                    </NavLink>
                </div>
            </FormWrapper>
        </Wrapper>
    );
};

export default Registration;
