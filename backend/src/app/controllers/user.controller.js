import { getOne, deleteOne, updateOne, updateOnePassword } from '../services/user.service';
import { get as getAllUserProduct} from '../services/userProduct.service';
import { get as getAllPurchased } from '../services/purchase.service';


export const getUser = async (req, res) => {
    try {
        const data = await getOne({ id: req.loggedUser.id });

        if (data.error) {
            return res.status(404).send(data.error);
        }

        return res.status(201).send(data);
    } catch (error) {
        console.log(error);
        res.status(500).send('Something wrent wrong.');
    }
};

export const getUserProducts = async (req, res,) =>
{
    try
    {
        const result = await getAllUserProduct(req.loggedUser.id);
        res.status(200).send(result);
    }

    catch(error)
    {
        console.log(error);
        res.status(500).send('Something went wrong.')
    }
}


export const getUserPurchases = async (req , res ) =>
{

    try
    {
        const result = await getAllPurchased(req.loggedUser.id);
        console.log(result);

        return res.status(200).send(result);
    }

    catch(error)
    {
        console.log(error);
        res.status(500).send('Something went wrong.');
    }
}



export const updateUser = async (req, res) =>
{
    try
    {
        const userId = req.loggedUser.id;
        const data = await updateOne(userId , req.body);
        console.log(data);

        res.status(200).send({message :"Profile updates has been sucessfully."});
    }
    catch(error)
    {
        console.log(error);
        res.status(500).send('Something wrent wrong.');
    }
}


export const updatePassword = async (req, res) =>
{
    
    try
    {
        const userId = req.loggedUser.id;
        const data = await updateOnePassword(userId , req.body);

        if(data.error)
        {
            return res.status(400).send( data.error );
        }

        return res.status(200).send({
            message: 'Password has been updated.',
        });
    }

    catch(error)
    {
        console.log(error);
        res.status(500).send('Something wrent wrong.');
    }
}





export const deleteUser = async(req, res) => {
    try
    {
        const userId = req.loggedUser.id;
        await deleteOne(userId);

        return res.status(200).send(
            {
                message : 'User has been deleted successully.'
            }
        )


    }

    catch(error)
    {
        console.log(error);
        res.status(500).send('Something wrent wrong.');
    }
}