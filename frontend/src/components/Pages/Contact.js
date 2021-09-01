import React, { useState } from 'react';
import styled from 'styled-components';
import { FiSend } from 'react-icons/fi';
import { postMail } from '../../actions/mail';
import {createAlert} from '../Common/Alert/Alert'



const Contact = () => {

    const [mail , setMail] = useState(
        {
            title : '',
            message : ''
        }
    )



    async function onSubmitHandler(e)
    {
        e.preventDefault();
        if(mail.message.trim() === '' || mail.title.trim === '')
        {
            return createAlert('Please fill all fields corectly.' , 'error')
        }

        await postMail(mail.title.trim() , mail.message.trim())
        createAlert('Email sended.')
        setMail({
            title : '',
            message : ''
        });
    }


    function onChangeHandler(e)
    {
        setMail({ ...mail, [e.target.name]: e.target.value });
    }



    return (
        <Wrapper>
            <FormWrapper>
                <ContanctDiv>
                    <h2>Contact</h2>
                </ContanctDiv>

                <form onSubmit = {onSubmitHandler}>
                    <input type='text' placeholder='Title' name = 'title' onChange = {onChangeHandler} value = {mail.title}></input>

                    <textarea rows='15' placeholder='Your Message' name = 'message' onChange = {onChangeHandler} value = {mail.message} ></textarea>
                    <button type='submit'>
                        <FiSend />
                    </button>
                </form>
            </FormWrapper>
        </Wrapper>
    );
};

const ContanctDiv = styled.div`
    margin-top: 30px;
    font-size: large;
    width: 50%;
    text-align: center;
`;

const Wrapper = styled.div`
    height: 100vh;
`;

const FormWrapper = styled.div`
    display: flex;
    flex-direction: column;

    align-items: center;
    form {
        border-radius: 20px;
        background-color: #262626;
        padding: 50px;
        margin-top: 30px;
        display: flex;
        flex-direction: column;
        width: 50%;

        * {
            margin: 10px 0px;
        }

        input {
            padding: 10px;
            background-color: transparent;
            border: none;
            border-bottom: 1px solid orange;
            outline: none;
            color: white;
        }
        textarea {
            background-color: transparent;
            resize: none;
            padding: 20px;
            color: white;
        }

        button {
            font-size: large;
            border: none;
            background-color: orange;
            border-radius: 5px;
            color: white;
        }
    }
`;

export default Contact;
