 import { User } from '../../db/models';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import { jwtConfig } from '../../config/config';
import {encrypt} from '../utils/cryptCreditCard'


export const register = async (body) => {
    
    const { email, password, creditCard } = body;

    // Check if user exist
    let existingUser = await User.findOne({
        where: { email: email },
    });

    if (existingUser) {
        return {
            error: {
                message: 'This email has already been used!',
                label: 'email',
            },
        };
    }

    // Hashed password
    const hashedPassword = bcrypt.hashSync(password, jwtConfig.salt);

    // Crypt CreditCard
    const cryptedCreditCard = encrypt(creditCard);


    // Create new user in db
    const result = await User.create({
        ...body,
        password: hashedPassword,
        creditCard : cryptedCreditCard
    });

    // Create token
    const token = jwt.sign(
        {
            id: result.id,
            name : result.firstName + " " + result.lastName
        },
        jwtConfig.secretkey,
        { expiresIn: '24h' }
    );

    return { token: token };
};


export const login = async(body) =>
{
    const { email, password } = body;

    // Check user email
    const existingUser = await User.findOne({
        where: { email: email },
    });

    if (!existingUser) {
        return {
            error: {
                message: 'Account with this email address does not exist.',
                label: 'email',
            },
        };
    }

    // Check user password
    const isPasswordCorrect = await bcrypt.compare(
        password,
        existingUser.password
    );


    if (!isPasswordCorrect) {
        return {
            error : {
                message: 'Password is incorect.',
                label: 'password',
            }
          
        };
    }

    // Create token
    const token = jwt.sign(
        {
            id: existingUser.id,
            name : existingUser.firstName + " " + existingUser.lastName,
        },
        jwtConfig.secretkey,
        { expiresIn: '24h' }
    );

    return { token };
}
