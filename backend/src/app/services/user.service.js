import { User } from '../../db/models';
import { decrypt, encrypt } from '../utils/cryptCreditCard';
import bcrypt from 'bcrypt'
import { jwtConfig } from '../../config/config';


export const getOne = async (object) => {
    let user = await User.findOne({
        where: object,
    });

    if (!user) {
        return {
            error: {
                message: 'User not found',
            },
        };
    }

    user.password = '';
    user.creditCard = decrypt(user.creditCard);

    return user;
};


export const updateOne = async (id, newData) =>
{
    const user = await User.findOne({
        where: { id },
    });

    if(user.firstName !== newData.firstName)
    {
        user.firstName = newData.firstName;
    }

    if(user.lastName !== newData.lastName)
    {
        user.lastName = newData.lastName;
    }

    if(decrypt(user.creditCard) !== newData.creditCard)
    {
        user.creditCard = encrypt(newData.creditCard);
    }

    if(user.country !== newData.country)
    {
        user.country = newData.country;
    }

    if(user.bio !== newData.bio)
    {
        user.bio = newData.bio;
    }

    if(user.birthdate !== newData.birthdate)
    {
        user.birthdate = newData.birthdate;
        console.log(user.birthdate);
    }

    return user.save();

}

export const updateOnePassword = async (id , newData) =>
{

    const user = await User.findOne({
        where: { id },
    });

    const {password , newPassword} = newData;

    // Check old password is correctyly
    const isPasswordCorrect = await bcrypt.compare(
        password,
        user.password
    );


    if(!isPasswordCorrect)
    {
        return {
            error : {
                message: 'Old password is incorrect.',
                label: 'password',
            }
        };
    }

    // Hashed password
    const hashedPassword = bcrypt.hashSync(newPassword, jwtConfig.salt);

    user.password = hashedPassword;

    return user.save();

}

export const deleteOne = async (id) =>
{
    User.destroy({
        where: { id },
    });
} 