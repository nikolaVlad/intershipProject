import { observer } from 'mobx-react';
import React, { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';
import {
    BodyCard,
    DataSpan,
    HeaderCard,
    ProductPlace,
    Wrapper,
} from './HistoryPaymentCardElements';
import UserProductStore from '../../../../../stores/UserProductStore';




const HistoryPaymentCard = observer (({purchase}) => {

    const [products, setProducts] = useState([]);


    function getProducts()
    {
        return UserProductStore.products.filter((userProduct) => {
            return userProduct.purchaseId === purchase.id;
        });
        
    }

    useEffect(() =>
    {
        setProducts(getProducts());
    }, []);


    return (
        <Wrapper>
            <HeaderCard>
                <div>
                    Date : <DataSpan> {purchase.createdAt.toString().slice(0,10)} </DataSpan>
                </div>

                <div>
                    Total cost : <DataSpan>{purchase.amount} &euro;</DataSpan>
                </div>

                <div>
                    Total products : <DataSpan>{products.length}</DataSpan>
                </div>
            </HeaderCard>
            <BodyCard>
            {products.length > 0 ?
                products.map(product => 
                    {
                       return (
                           <ProductPlace key = {product.id}>
                               <div>
                                   <NavLink to = {`/products/${product.id}`}>
                                       {product.name}
                                   </NavLink>
                               </div>
                              
                               <div>{product.price}</div>
                           </ProductPlace>
                       );
                    })
        
            : 'nemaa'}




                

        
            </BodyCard>

            <hr style={{ backgroundColor: '#545454' }} />
        </Wrapper>
    );
});

export default HistoryPaymentCard;
