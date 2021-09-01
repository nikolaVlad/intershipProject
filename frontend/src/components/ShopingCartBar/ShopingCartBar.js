import React from 'react';
import styled from 'styled-components';
import CartStore from '../../stores/CartStore';
import onPayment from '../../utils/events/onPayment';
import { createAlert } from '../Common/Alert/Alert';

function ShopingCartBar() {

    async function onClickOrderHandler()
    {
        try
        {
           const result = await onPayment();
           createAlert(result.message);

        }

        catch(error)
        {
            console.log(error);
            return error;
        }
        
    }




    return (
        <Wraper>
            <div>
                <div>Num of products : </div>

                <div style = {{color : 'orange'}}>{CartStore.CartProductsList.length}</div>
            </div>

            <div>
                <div >Total cost : </div>

                <div style = {{color : 'orange'}}>{CartStore.total.toFixed(3)} &euro;</div>
            </div>

            <div>
                <OrderBtn onClick = {() => onClickOrderHandler()}>Order</OrderBtn>

                <EmptyBtn onClick = {() => {CartStore.removeProductFromCart()}}>Empty cart</EmptyBtn>
            </div>
        </Wraper>
    );
}

const Wraper = styled.div`
    display: flex;
    justify-content: space-between;
    color: white;
    background-color: #303030;
    opacity: 0.8;

    * {
        display: flex;
        padding: 20px 15px ;
       
        opacity: 1;
    }

    
`;

const OrderBtn = styled.button`
    background-color: transparent;
    color: white;
    border: 1px solid orange;
    border-radius: 7px;
    display: block;
    width: 200px;
    justify-content: center;
    margin-right: 20px;

    &:hover
    {
        background-color: orange;
        color : black;
        opacity: 0.9;
    }
`;
const EmptyBtn = styled.button`
    background-color: transparent;
    color: white;
    border: 1px solid gray;
    border-radius: 7px;
    width: 200px;
    justify-content: center;

    &:hover
    {
        background-color: #7d7d7d;
      
        opacity: 0.9;
    }
`;

export default ShopingCartBar;
