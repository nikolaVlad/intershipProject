import { observer } from 'mobx-react';
import React, { useEffect } from 'react'
import UserProductsStore from '../../../../stores/UserProductStore';
import ProductComponent from '../../../ProductComponent/ProductComponent';
import { PGHeader, PurshachedGames } from './PurshachedGamesCardElements'


const PurshachedGamesCard = observer(() => {

    useEffect( async() =>
    {
        await UserProductsStore.init();
    } , []);

 
    return (
        <>
            <PGHeader>
                Total : {'  '}
                <span style={{ color: 'orange' }}>
                    {UserProductsStore.products?.length > 0
                        ? UserProductsStore.products.length
                        : '0'}
                </span>
            </PGHeader>
            <PurshachedGames>
                {UserProductsStore.products ? (
                    UserProductsStore.products.map((product) => {
                        return (
                            <ProductComponent
                                key={product.id}
                                product={product}
                                onSingleCategoryClick={null}
                                cartVariant
                                noActionsVarant
                            />
                        );
                    })
                ) : (
                    <div>nema</div>
                )}
            </PurshachedGames>
        </>
    );
})

export default PurshachedGamesCard
