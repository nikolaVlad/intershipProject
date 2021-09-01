import * as api from '../api';

export const postPayment = async() =>
{
    try
    {
        const result = await api.postPayment();
        return result;
    }

    catch(error)
    {
        console.log(error);
        return error;
    }
}