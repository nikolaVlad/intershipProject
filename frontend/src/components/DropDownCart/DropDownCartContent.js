// import { observer } from 'mobx-react';
import React from 'react';
import { productsRoute } from '../../config/defaultRoutes';
import CartStore from '../../stores/CartStore';
import priceToNumber from '../../utils/priceToNumber';
import { LinkComponent } from '../Navbar/NavbarElements';
import {
    ItemPlace,
    TotalPlace,
    RemoveButton,
} from './DropDownCartElements';
import { ImCross } from 'react-icons/im';
import {RiDeleteBin4Fill} from 'react-icons/ri'
import {FaShoppingBag} from 'react-icons/fa'
import { primaryColor } from '../Common/GlobalStyles';

const DropDownCartContent = () => {


    if(CartStore.CartProductsList.length <1)
    {
        return <div style = {{margin: '20px 0px' , color : 'gray'}}> Cart is empty. </div>
    }


    return (
        <>
            <TotalPlace>
                <span style={{ flexBasis: '33%' }}>Total cost:</span>
                <b style={{ flexBasis: '31%' }}>
                    {CartStore.total.toFixed(3)} &euro;
                </b>
                <span style={{ flexBasis: '40%' }}>
                    <LinkComponent to = 'shoping-cart' ><FaShoppingBag color={primaryColor} cursor = 'pointer' /> </LinkComponent>
                </span>
                <span style={{ flexBasis: '10%' }} onClick = {() => CartStore.removeProductFromCart()}>
                    <RiDeleteBin4Fill color='orange' cursor = 'pointer' />
                </span>
            </TotalPlace>
            <div style = {{marginTop : '60px'}}>
                {CartStore.CartProductsList.map((el) => {
                    return (
                        <ItemPlace key={el.id}>
                            <LinkComponent
                                to={`/${productsRoute}${el.id}`}
                                color='white'
                            >
                                {el.name}
                            </LinkComponent>
                            <div>{priceToNumber(el.price)} &euro;</div>
                            <RemoveButton
                                onClick={() =>
                                    CartStore.removeProductFromCart(el)
                                }
                            >
                                <ImCross />
                            </RemoveButton>
                        </ItemPlace>
                    );
                })}
            </div>
        </>
    );
};

export default DropDownCartContent;
