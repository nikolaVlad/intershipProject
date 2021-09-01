import jwt from 'jsonwebtoken';
import { getOne } from '../services/user.service';
import { jwtConfig } from '../../config/config';
import { purshaceAppConfig } from '../../config/config';
import axios from 'axios';

export const checkPayment = async (loggedUserId) => {
    const user = await getOne({ id: loggedUserId });
    const creditCard = user.creditCard;

    if (creditCard) {
        try {
            const token = jwt.sign({ creditCard }, jwtConfig.secretkey);
            console.log('Token for paying : ' + token);

            const checkToken = await axios.post(
                `${purshaceAppConfig.URL}/checkPayment`,
                { token }
            );

            return checkToken.status === 200;
        } 
        
        catch (error) {
            return console.log('ne radi');
        }
    }

    return false;
};
