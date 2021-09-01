import AuthStore from "../stores/AuthStore";
import jwt_decode from 'jwt-decode';


export const setToken = (token) => {
    AuthStore.setIsLogged(true);
    return localStorage.setItem('token', token);
};

export const getToken = () => {
    return localStorage.getItem('token');
};

export const clearToken = () => {
    AuthStore.setIsLogged(false);
    return localStorage.removeItem('token');
};

export const getTokenItem = (item) =>
{
    if(getToken())
    {
        const token = jwt_decode(getToken());
        return token[item];
    }
    return false;
   
}