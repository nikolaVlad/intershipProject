import React from 'react'
import ButtonComponent from '../../Styled/ButtonComponent';
import PropTypes from 'prop-types';
import { primaryColor } from '../GlobalStyles';
import {productsRoute} from '../../../config/defaultRoutes';


// eslint-disable-next-line no-unused-vars
function DetailsProductButton({product}) {

  

    return (
        <ButtonComponent
            to={`${productsRoute}${product.id}`}
            color='white'
            bg={`transparent`}
            border={`2px solid ${primaryColor}`}
            borderradius='5px'
            style={{ marginTop: '10px' }}
        >
            Details... 
        </ButtonComponent>
    );
}



DetailsProductButton.propTypes = {  
    product : PropTypes.object
}

export default DetailsProductButton;
