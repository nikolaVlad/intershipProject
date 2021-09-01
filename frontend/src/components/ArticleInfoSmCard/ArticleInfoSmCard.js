import React from 'react'
import { Wrapper } from './ArticleInfoSmCardElement'

import PropsTypes from 'prop-types';
import DetailsProductButton from '../Common/DetailsProductButton/DetailsProductButton';
import AddInCartButton from '../Common/AddInCartButton/AddInCartButton';

function ArticleInfoSmCard({product , className}) {
    return (
        <Wrapper className={className}>
            <h5>{product.name || ''}</h5>
            <DetailsProductButton product = {product} />

            <AddInCartButton product = {product} />

        </Wrapper>
    );
}

ArticleInfoSmCard.propTypes = 
{
    product : PropsTypes.object,
    className : PropsTypes.any
}


export default ArticleInfoSmCard;
