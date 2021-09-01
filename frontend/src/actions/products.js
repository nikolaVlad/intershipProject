import * as api from '../api';

// GET METHODS
export const getProducts = async () => {
    try {
        const data = await api.getProducts();
        return data;
    } 
    catch (error) {
        console.log(error);
    }
};

export const getProductById = async (id) => {
    try
    {
        const data = await api.getProductById(id);
        return data;
    }

    catch(error)
    {
        console.log(error);
    }
    
}
