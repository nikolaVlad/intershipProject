const priceToNumber = (productPrice) =>
{
    return productPrice.startsWith('Free')
        ? 0
        : parseFloat(
              productPrice
                  .replace(',', '.')
          );
}

export default priceToNumber;