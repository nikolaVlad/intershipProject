import React from 'react'
import { ImCross } from 'react-icons/im';
import { productsRoute } from '../../config/defaultRoutes';
import WishListStore from '../../stores/WishListStore'
import priceToNumber from '../../utils/priceToNumber';
import { ItemPlace, RemoveButton } from '../DropDownCart/DropDownCartElements';
import { LinkComponent } from '../Navbar/NavbarElements';
import { ActionPlace, RemoveBtn, SeeAllBtn } from './DropDownWishListContentElements';


const DropDownWishListContent = () => {

    if(WishListStore.WishListProducts.length <1)
    {
        return <div style = {{margin: '20px 0px' , color : 'gray'}}> Wish list is empty. </div>
    }



    return (
        <div>
            <ActionPlace>
                <SeeAllBtn > <LinkComponent to = '/wish-list' color = {'yellow'} hovercolor = {'yellow'} > See all  </LinkComponent></SeeAllBtn>
                <RemoveBtn onClick = {() => WishListStore.removeWishListProduct()}> Remove all </RemoveBtn>
            </ActionPlace>

            {WishListStore.WishListProducts.map( el =>
                {
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
                                    WishListStore.removeWishListProduct(el)
                                }
                            >
                                <ImCross />
                            </RemoveButton>
                        </ItemPlace>
                    );
                })}
            

        </div>
    )
}

export default DropDownWishListContent
