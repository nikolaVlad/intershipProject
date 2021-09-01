import React, { useState } from 'react';
import { NavLink, Redirect, useHistory } from 'react-router-dom';
import signinSchema from '../../../rules/signin.schema';
import validate from '../../../utils/validate';
import { Logo } from '../../Common/GlobalStyles';
import Input from '../../Common/Input/Input';
import { Wrapper, LogInBtn, LogoImg, FormWrapper } from './LogInElements';
import { getToken } from '../../../utils/localStorageService';
import onLogin from '../../../utils/events/onLogin';
import { signin } from '../../../actions/auth';

const LogIn = () => {

    const history = useHistory();


    const [error, setError] = useState({
        message: '',
        label: '',
    });

    const [signinData, setSigninData] = useState({
        email: '',
        password: '',
    });

    async function onSubmitHandler(e) {
        e.preventDefault();

        let error = validate(signinData, signinSchema);
        if (error) 
        {
            return setError(error);
        }

        try {
            let result = await signin(signinData);
            onLogin(result.token);
            return history.push('/');
        } 
        
        catch (err) {

            if(err.details)
            {
                return setError({
                    message: err.details.message,
                    label: err.details.label,
                });
            }
            
            console.log(err);
        }
    }

    function onChangeHandler(e) {
        setSigninData({
            ...signinData,
            [e.target.name]: e.target.value,
        });

        if (e.target.name === error.label) {
            setError({});
        }
    }

    if(getToken() !== null)
    {
        return <Redirect to ='/' />
    }


    return (
        <Wrapper>
            <FormWrapper>
                <LogoImg src={Logo} />
                <form onSubmit={onSubmitHandler}>
                    <Input
                        name='email'
                        placeholder='Your email...'
                        type='text'
                        value={signinData.email}
                        onChange={onChangeHandler}
                        error={error.label === 'email'}
                        message={error.message}
                        style={{ margin: '2px 20px' }}
                    />

                    <div>
                        <Input
                            name='password'
                            placeholder='Your password...'
                            type={'password'}
                            value={signinData.password}
                            onChange={onChangeHandler}
                            error={error.label === 'password'}
                            message={error.message}
                            style={{ margin: '2px 20px' }}
                        />
                    </div>

                    <LogInBtn type='submit'>Log in</LogInBtn>
                </form>
                <span style={{ color: 'gray' }}>
                    Do not have an account ?
                    <NavLink to='/registration' style={{ color: 'orange' }}>
                        {' '}
                        Register here...
                    </NavLink>
                </span>
            </FormWrapper>
        </Wrapper>
    );
};

export default LogIn;
