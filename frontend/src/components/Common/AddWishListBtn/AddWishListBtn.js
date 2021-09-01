import { observer } from 'mobx-react'
import React from 'react'
import { RiHeartAddLine, RiHeartFill } from 'react-icons/ri'
import styled from 'styled-components'
import WishListStore from '../../../stores/WishListStore'
import { getToken } from '../../../utils/localStorageService'
import { primaryColor } from '../GlobalStyles'



const AddWishListBtn = observer(({product}) => {

    let isInWishList = ((WishListStore.WishListProducts.filter(wlproduct => wlproduct.id === product.id)).length > 0 )

    function onClickHandler()
    {
        if(WishListStore.WishListProducts.filter(wlProduct => wlProduct.name === product.name).length > 0)
        {
            WishListStore.removeWishListProduct(product);
            return;
        }

        else WishListStore.setWishListProduct(product)
    }


    if(!getToken())
    {
        return null;
    }


    return (
        <StyledBtn onClick={() => onClickHandler()}>
            {isInWishList ? (
                <span>
                    <RiHeartFill color={primaryColor} /> In wish list
                </span>
            ) : (
                <span>
                    <RiHeartAddLine color={primaryColor} /> Add to wish list
                </span>
            )}
        </StyledBtn>
    );
})


const StyledBtn = styled.button`
    background-color: transparent;
    color : ${primaryColor};
    border : none;
    font-size: large;
    appearance: none;

    &:hover
    {
        color : yellow;
    }
    &:focus
    {
        color : yellow;
        outline: none;
        border: none;
    }


`



export default AddWishListBtn
