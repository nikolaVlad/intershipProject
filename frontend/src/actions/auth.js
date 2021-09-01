import * as api from '../api';

// Registration
export const signup = async (userData) => 
{
    const result = await api.signup(userData);
    return result;
};


// LogIn
export const signin = async (logInData) =>
{
    const result = await api.signin(logInData);
    return result;
}