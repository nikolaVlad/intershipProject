import React from 'react'

import ImageComponent from '../Styled/ImageComponent';

import ArticleInfoSmCard from '../ArticleInfoSmCard/ArticleInfoSmCard';

import {Wrapper} from './BlurredGameCardElements';

import PropTypes from 'prop-types';


function BlurredGameCard({product , CoverVariant}) {
  
    return (
        <Wrapper>
            <ImageComponent src = {product.images[0].path_thumbnail} className = 'ImageBox' CoverVariant = {CoverVariant || false} />

            <ArticleInfoSmCard className = 'InfoBox' product = {product} />
        </Wrapper>
    )
}


BlurredGameCard.propTypes =
{
    product : PropTypes.object,
    CoverVariant : PropTypes.bool
}


export default BlurredGameCard
