import React, { useEffect, useState } from 'react';
import AddWishListBtn from '../Common/AddWishListBtn/AddWishListBtn';
import { primaryColor } from '../Common/GlobalStyles';
import GaleryRow from '../GaleryRow/GaleryRow';
import { DescriptionText } from '../ProductComponent/ProductComponentElements';
import ImageComponent from '../Styled/ImageComponent';
import StarRatings from 'react-star-ratings';

import {
    Wrapper,
    MainProductImgs,
    MainProductPic,
    MainProductInfo,
    MainInfo,
    ActionPlace,
    DescriptionInfo,
} from './MainProductPlaceElements';
import PropTypes from 'prop-types';
import AddInCartButton from '../Common/AddInCartButton/AddInCartButton';

function MainProductPlace({ product }) {
    function changeSelectedImg(img) {
        setSelectedImg(img.path_thumbnail);
    }

    function getItemList() {
        let imgItems = [];
        product.images.map((img, index) => {
            let item = {
                value: (
                    <ImageComponent
                        src={img.path_thumbnail}
                        key={index}
                        onClick={() => changeSelectedImg(img)}
                    />
                ),
                flexBasis: '25%',
            };

            imgItems.push(item);
        });

        return imgItems;
    }

    const [picsItems, setPicsItems] = useState([]);
    const [selectedImg, setSelectedImg] = useState(
        product.images[0].path_thumbnail
    );

    useEffect(() => {
        setPicsItems(getItemList());
        setSelectedImg(product.images[0].path_thumbnail);
    }, [product]);

    return (
        <Wrapper>
            <MainProductImgs>
                <MainProductPic>
                    <ImageComponent src={selectedImg} />
                </MainProductPic>

                <GaleryRow items={picsItems} />
            </MainProductImgs>

            <MainProductInfo>
                <MainInfo>
                    <h2>{product.name}</h2>
                    <div style={{ marginTop: '10px', marginBottom: '20px' }}>
                        <span style={{ display: 'flex', alignItems: 'center' }}>
                            <span style={{ color: `${primaryColor}` }}>
                                {product.rating}
                            </span>
                            <span
                                style={{
                                    paddingBottom: '5px',
                                    marginLeft: '5px',
                                }}
                            >
                                <StarRatings
                                    rating={product.rating}
                                    starRatedColor='#a3a3a3'
                                    numberOfStars={5}
                                    starDimension='12px'
                                    starSpacing='1px'
                                    starEmptyColor='#575757'
                                />
                            </span>
                        </span>
                    </div>
                    <ActionPlace>
                        <AddInCartButton product={product} />
                        <AddWishListBtn product={product} />
                    </ActionPlace>
                </MainInfo>

                <DescriptionInfo>
                    <h4>Description</h4>

                    <DescriptionText style={{ marginTop: '10px' }}>
                        {product.description}
                    </DescriptionText>
                </DescriptionInfo>
            </MainProductInfo>
        </Wrapper>
    );
}

MainProductPlace.propTypes = {
    product: PropTypes.object,
};
export default MainProductPlace;
