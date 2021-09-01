import { observer } from 'mobx-react'
import React from 'react'
import CartStore from '../../stores/CartStore';
import { ProductCountPlace } from './ProductsCountStickerElements';

const ProductsCountSticker = observer (() => {
    return (
        <ProductCountPlace>
            {CartStore.CartProductsList.length}
        </ProductCountPlace>
    )
});

export default ProductsCountSticker
