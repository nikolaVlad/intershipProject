import { send } from "../services/mail.service";



export const sendMail = async (req, res) =>
{

    try
    {
        const {subject , message } = req.body;

        const result = await send(req.loggedUser.id ,subject , message);
        console.log("Ovde je result");
        console.log(result);
    
     
        res.send("ok");
    }

    catch(error)
    {
        console.log(error);
        return res.send('ne ok');
    }
  
}