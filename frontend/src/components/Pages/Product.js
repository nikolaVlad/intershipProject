import React, { useEffect, useState } from 'react';
import MainProductPlace from '../MainProductPlace/MainProductPlace';
import SimilarProductPlace from '../SimilarProductPlace/SimilarProductPlace';
import ReviewComponent from '../ReviewComponent/ReviewComponent.js';
import { Wrapper } from '../MainProductPlace/MainProductPlaceElements';
import styled from 'styled-components';
import { useParams } from 'react-router-dom';
import LoadingComponent from '../Common/LoadingComponent/LoadingComponent';
import Erro404Component from '../Common/Erro404Component/Erro404Component';
import {getProductById} from '../../actions/products';

function Product() {
    const [product, setProduct] = useState('');

    const [ifError, setError] = useState(false);

    const { productId } = useParams();

    async function getDataFromApi() {
        try {
            let data = await getProductById(productId);
           
            data = data.data;

            setProduct({
                id: data.id,
                images: data.images,
                name: data.name,
                description: data.description,
                comments: data.comments,
                price: data.price,
                rating: data.rating / 2,
                genre: data.genre,
            });
        } catch (err) {
            console.log(err);
            setError(true);
        }
    }

    useEffect(async () => {
        getDataFromApi();
    }, []);

    useEffect(() => {
        setError(false);
        getDataFromApi();
    }, [productId]);

    if (ifError) return <Erro404Component />;

    return (
        <>
            {!product ? (
                <LoadingComponent />
            ) : (
                <>
                    <MainProductPlace product={product} />

                    <Wrapper style={{ marginTop: '80px' }}>
                        <LeftSide>
                            <SimilarProductPlace images={product.images} />
                        </LeftSide>

                        <RightSide>
                            <ReviewComponent commentsList={product.comments} productId = {product.id} />
                        </RightSide>
                    </Wrapper>
                </>
            )}
        </>
    );
}

const LeftSide = styled.div`
    flex-basis: 50%;
`;
const RightSide = styled.div`
    flex-basis: 45%;
`;

export default Product;
