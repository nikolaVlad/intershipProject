import * as api from '../api';

export const testApi = async (podaci) =>
{
    try{
        const data = await api.test(podaci)
        return data;
    }
    catch(error)
    {
        console.log(error)
    }
}