const applySearchFilter = (products, keywords) =>
{
    let result = products.filter((product) => 
    {
        if (product.name.toLowerCase().includes(keywords.toLowerCase().trim()))
        {
            return product;
        }
    })
    
    return result;

}

export default applySearchFilter;