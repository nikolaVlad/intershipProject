import React, { useEffect, useState } from 'react';
import SideGameComponent from '../SideGameComponent/SideGameComponent';

import ImageRow from '../Common/ImageRow/ImageRow';

import BlurredGameCard from '../BlurredGameCard/BlurredGameCard';
import GridImageView from '../GridImageView/GridImageView';
import LogosBar from '../LogosBar/LogosBar';

import LoadingComponent from '../Common/LoadingComponent/LoadingComponent';
import styled from 'styled-components';
import { GiTrophyCup } from 'react-icons/gi';
import { Redirect } from 'react-router-dom';
import Erro404Component from '../Common/Erro404Component/Erro404Component';
import ProductsStore from '../../stores/ProductsStore';
import { observer } from 'mobx-react';

const Home = observer(() => {
    const [products, setProducts] = useState('');
    const [err, setErr] = useState(false);

    async function getDataFromApi() {
        try {
           
            let data = [ ... await ProductsStore.getAllProduct() ];

            data = data.splice(0, 14);

            setProducts(data.reverse());

            setProducts(data);

        } catch (err) {
            setErr(true);
        }
    }

    useEffect(async () => {
        setErr(false);
        getDataFromApi();
    }, []);

    let gridItems = [
        {
            value: (
                <TopGamesDiv>
                    <GiTrophyCup />
                    Top games
                </TopGamesDiv>
            ),
        },
        {
            value: <BlurredGameCard CoverVariant product={products[5]} />,
            gridArea: '1/2/1/4',
        },
        {
            value: <BlurredGameCard CoverVariant product={products[6]} />,
            gridArea: '1/4/3/4',
        },
        {
            value: <BlurredGameCard CoverVariant product={products[7]} />,
            gridArea: '2/1/2/3',
        },
        {
            value: <BlurredGameCard CoverVariant product={products[8]} />,
        },
        {
            value: <BlurredGameCard CoverVariant product={products[9]} />,
        },
        {
            value: <BlurredGameCard CoverVariant product={products[10]} />,
        },
        {
            value: <BlurredGameCard CoverVariant product={products[11]} />,
            gridArea: '3/3/5/5',
        },
        {
            value: <BlurredGameCard CoverVariant product={products[12]} />,
        },
        {
            value: <BlurredGameCard CoverVariant product={products[13]} />,
        },
    ];

    if (err) <Redirect to = {Erro404Component} />;

    return (
        <>
            {!products ? (
                <LoadingComponent />
            ) : (
                <>
                    <SideGameComponent mainProduct={products[0]} />
                    <ImageRow
                        itemsList={[
                            {
                                value: (
                                    <BlurredGameCard product={products[1]} />
                                ),
                                flexBasis: '25%',
                            },
                            {
                                value: (
                                    <BlurredGameCard product={products[2]} />
                                ),
                                flexBasis: '25%',
                            },
                            {
                                value: (
                                    <BlurredGameCard product={products[3]} />
                                ),
                                flexBasis: '25%',
                            },
                            {
                                value: (
                                    <BlurredGameCard product={products[4]} />
                                ),
                                flexBasis: '25%',
                            },
                        ]}
                    />

                    <LogosBar />

                    <GridImageView
                        gridItems={gridItems}
                        gridTemplateColumns='1fr 1fr 1fr 1fr'
                        gridTemplateRows='1fr 1fr'
                    />
                </>
            )}
        </>
    );
});

const TopGamesDiv = styled.div`
    display: flex;

    flex-direction: column;

    justify-content: center;

    align-items: center;

    font-size: 30px;

    background-color: #292929;
    
    height: 100%; 
`;

export default Home;
