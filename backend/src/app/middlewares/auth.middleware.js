import jwt from 'jsonwebtoken';
import { jwtConfig } from '../../config/config';

const isAuthenticated = (req, res, next) => {
    const token = req.header('authorization');

    if (!token) 
    {
        return res.status(403).send('A token is required for authentication');
    }

    try 
    {
        const decodedData = jwt.verify(token, jwtConfig.secretkey);

        // For identification login user.
        req.loggedUser = {
            id: decodedData.id,
        };
    } 
    
    catch (error) {
        return res.status(401).send('Invalid token');
    }

    return next();
};

export default isAuthenticated;
