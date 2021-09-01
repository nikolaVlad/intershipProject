import React from 'react';
import { primaryColor } from '../Common/GlobalStyles';
import ImageComponent from '../Styled/ImageComponent';
import {
    CategoriesPlace,
    DescriptionText,
    ImagePlace,
    PrimaryInfo,
    ProductInfo,
    SecondaryInfo,
    Wrapper,
    ProductActions,
} from './ProductComponentElements';
import AddWishListBtn from '../Common/AddWishListBtn/AddWishListBtn';
import StarRatings from 'react-star-ratings';
import PropTypes from 'prop-types';
import LinkComponent from '../Styled/LinkComponent';
import ProductReview from './ProductReview';
import AddInCartButton from '../Common/AddInCartButton/AddInCartButton';

// eslint-disable-next-line no-unused-vars
function ProductComponent({ product , onSingleCategoryClick , cartVariant , noActionsVarant}) {
    return (
        <Wrapper>
            <ImagePlace>
                <ImageComponent src={product.images[0].path_thumbnail} CoverVariant />
            </ImagePlace>

            <ProductInfo>
                <PrimaryInfo>
                    <h3>
                        <LinkComponent
                            color='white'
                            hovercolor='#cfcfcf'
                            to={`/products/${product.id}`}
                        >
                            {product.name}
                        </LinkComponent>
                    </h3>

                    <CategoriesPlace>
                        {product.genre.map((el, index) => {
                            return cartVariant ? (
                                <span key = {index}>  {el} </span>
                            ) : (
                                <LinkComponent
                                    onClick={() => onSingleCategoryClick(el)}
                                    to='#'
                                    key={index}
                                >
                                    {el}
                                </LinkComponent>
                            );
                        })}
                    </CategoriesPlace>
                </PrimaryInfo>

                <SecondaryInfo>
                    <h5 style={{ marginBottom: '15px' }}>Description</h5>

                    <DescriptionText>
                        <ProductReview
                            charrArray={product.description}
                            maxChars={250}
                        />
                    </DescriptionText>
                </SecondaryInfo>
            </ProductInfo>
            
            {!noActionsVarant &&
            <ProductActions>
                <span style={{ display: 'flex', alignItems: 'center' }}>
                    <span style={{ color: `${primaryColor}` }}>
                        {product.rating / 2}
                    </span>
                    <span style={{ paddingBottom: '5px', marginLeft: '5px' }}>
                        <StarRatings
                            rating={product.rating / 2}
                            starRatedColor='#a3a3a3'
                            numberOfStars={5}
                            starDimension='12px'
                            starSpacing='1px'
                            starEmptyColor='#575757'
                        />
                    </span>
                </span>

                <AddInCartButton product={product} />

                <AddWishListBtn product = {product} />
            </ProductActions>
            }
        </Wrapper>
    );
}

ProductComponent.propTypes = {
    product: PropTypes.object,
    onSingleCategoryClick : PropTypes.func,
    cartVariant : PropTypes.bool,
    noActionsVarant : PropTypes.bool
};

export default ProductComponent;
