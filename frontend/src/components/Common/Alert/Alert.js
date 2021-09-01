import React from 'react';
import {NotificationContainer, NotificationManager} from 'react-notifications';
import './Alert.css'
import {FiAlertCircle} from 'react-icons/fi';

export const  AlertContainer = NotificationContainer;

export const createAlert = (message , type) =>
{
    if(!type) type = 'success'

    return NotificationManager[type](<MessageBody message = {message} />,null,900,null,true);
}

// eslint-disable-next-line react/prop-types
const MessageBody = ({  message }) => (
    <div style = {{display : 'flex' , flexDirection : 'row', justifyContent : 'center' , alignItems : 'center'}}>
        <div><FiAlertCircle color = 'orange' size = '32px' style = {{margin : '20px'}}/></div>
        <div style = {{color : 'yellow'}}>{message}</div>
    </div>
);

