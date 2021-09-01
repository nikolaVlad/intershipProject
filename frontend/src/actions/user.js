import * as api from '../api';

export const getUser = async () =>
{
    try
    {
        let data = await api.getUser()
        return data;
    }
    catch(error)
    {
        console.log(error);
    }
}

export const getUserProducts = async () =>
{
    try
    {
        let data = await api.getUserProducts();
        return data;
    }

    catch(error)
    {
        console.log(error);
    }
}

export const updateUser = async (userData) =>
{
    try
    {
        let data = await api.updateUser(userData)
        return data;
    }
    catch(error)
    {
        console.log(error);
        return error;
    }
}

export const getUserPurchases = async () =>
{
    try
    {
        let data = await api.getUserPurchases();
        return data;
    }
    catch(error)
    {
        console.log(error);
        return error;
    }

}




export const updatePassword = async (passwordData) =>
{
    let data = await api.updatePassword(passwordData);
    return data;
   
}

export const deleteUser = async () =>
{
    let data = await api.deleteUser();
    return data;
}