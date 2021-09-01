import { login, register } from '../services/auth.service';


// User registration
export const signup = async (req, res) => {

    try
    {
        const data = await register(req.body);
        if(data.error)
        {
            return res.status(400).send(data.error);
        }

        return res.status(201).send(data);

    }
    catch(error)
    {
        console.log(error);
        return res.status(500).send("Something went wrong");
    }

};

// User logIn
export const signin = async (req, res) => {
    
    try
    {
        const data = await login(req.body)

        if(data.error)
        {
            return res.status(400).send(data.error);
        }

        return res.status(201).send(data);

    }
    catch(error)
    {
        console.log(error);
        return res.status(500).send("Something went wrong");
    }

   
   
};