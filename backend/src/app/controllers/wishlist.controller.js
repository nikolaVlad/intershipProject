import {get, create, destroyOne, destroy} from '../services/wishlist.service';


export const postProduct = async(req, res) =>
{
    const data = {
        userId : req.loggedUser.id,
        productId : req.body.id
    }

    try
    {
        await create(data);
        return res.status(204).send(
            {
                message : 'Product has been sucessfully added in wishlist.'
            }
        )
    }
    catch(error)
    {
        console.log(error);
    }
}



export const getWishlist = async(req, res) =>
{
    let userId = req.loggedUser.id;

    try
    {
        let data = await get(userId);

        return res.status(200).send(data.map(wishlist => wishlist.productId));
    }

    catch(error)
    {
        console.log(error);
        return res.status(500).send("Something went wrong.");
    }
}


export const deleteProduct = async (req, res) =>
{
    const productId = req.body.id;
    try
    {
        destroyOne(productId);
        return res.status(202).send(
            {
                message : 'Product has been sucessfully removed from wishlist.'
            }
        )
    }
    catch(error)
    {
        console.log(error);
        res.status(500).send("Something went wrong.");
    }
}

export const destroyWishlist = async (req, res) =>
{
    try
    {   
        await destroy(req.loggedUser.id);
        return res.status(202).send(
            {
                message : 'All product has been sucessfully removed from wishlist. '
            }
        )
    }
    catch(error)
    {
        console.log(error);
        return res.status(500).send("Something went wrong.")
    }

}