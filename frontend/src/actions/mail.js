import * as api from '../api';


export const postMail = async (subject , message) =>
{
    try
    {
        const result = await api.postMail(subject , message)
        return result;
    }

    catch(error)
    {
        console.log(error)
    }
}