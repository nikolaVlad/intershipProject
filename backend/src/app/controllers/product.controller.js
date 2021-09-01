import { get, getOne } from '../services/product.service';

export const getAllProducts = async (req, res) =>
{
    try
    {
        let data = await get()
        return res.send({data : data});
    }

    catch(error)
    {
       console.log(error);
       return res.status(500).send("Something went wrong!")
    }
}


export const getProduct = async (req, res) =>
{
    try
    {
        let data = await getOne(req.params.id);
        return res.send({data : data});
    }

    catch(error)
    {
        console.log(error);
        return res.status(500).send("Something went wrong!");
    }
}