import React, { useState } from 'react';
import ButtonComponent from '../../Styled/ButtonComponent';
import PropTypes from 'prop-types';
import { primaryColor } from '../GlobalStyles';
import CartStore from '../../../stores/CartStore';
import { observer } from 'mobx-react';
import Modal from '../Modal/Modal';
import { getToken } from '../../../utils/localStorageService';


const AddInCartButton = observer(({ product }) => {
    let isInCart =
        CartStore.CartProductsList.filter((el) => el.id === product.id).length >
        0;

    const [cartProductModalOpen, setCartProductModalOpen] = useState(false);


    // eslint-disable-next-line no-unused-vars
    function onClickHandler()
    {
        if(getToken())
        {
            // If product on cart - remove product
            if (
                CartStore.CartProductsList.filter(
                    (cartProduct) => cartProduct.name === product.name
                ).length > 0
            ) {
                setCartProductModalOpen(true);
                return;
            } else {
                setCartProductModalOpen(false);
                CartStore.setCartProductItem(product);
            }
        }
    }

    function onAccessCartModalHandler()
    {
        CartStore.removeProductFromCart(product);
        setCartProductModalOpen(false);
    }



    return (
        <>
            <Modal
                accessBtnText='Remove'
                closeBtnText='Cancel'
                dialogVariant
                isOpen={cartProductModalOpen}
                name='CartProductModla'
                onAccess={() => onAccessCartModalHandler() }
                onClose={() => setCartProductModalOpen(false)}
            >
                <div>Are you sure to remove this product from the cart ?</div>
            </Modal>
      

            <ButtonComponent
                className = {!getToken() ? 'disabled' : ''}
                color='black'
                bg={isInCart ? 'orange' : primaryColor}
                border={`1px solid ${isInCart ? 'orange' : primaryColor}`}
                borderradius='5px'
                style={{ marginTop: '10px' }}
                to='#'
                onClick={() => {
                    {
                        onClickHandler();
                    }
                }}
            >
                {isInCart
                    ? 'Remove from cart'
                    : product.price.toLowerCase().startsWith('free')
                    ? 'Free To Play'
                    : `In Cart ${product.price}`}
                {}
            </ButtonComponent>
        </>
    );
});

AddInCartButton.propTypes = {
    product: PropTypes.object,
};

export default AddInCartButton;
