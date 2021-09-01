import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import { LinkComponent } from '../../Navbar/NavbarElements'
import { DropDownCart, ProductCountPlace, Wrapper } from './DropDownComponentElements'
import PropTypes from 'prop-types';



function DropDownComponent({linkTo , linkIcon, countSource, content , iconColor , style , className}) {
    return (
        <Wrapper onClick = {() => {window.scrollTo(0,0)}}>
                <LinkComponent to= {linkTo} >
                    <FontAwesomeIcon icon={linkIcon} color = {iconColor}   className = 'linkIcon'/>
                </LinkComponent>

                <ProductCountPlace>
                    {countSource}
                </ProductCountPlace>
                
                <DropDownCart className = {`dropDownCart , ${className}`}  style = {style} >
                    {content}
                </DropDownCart>
        </Wrapper>
    )
}

DropDownComponent.propTypes =
{
    linkTo : PropTypes.string,
    linkIcon : PropTypes.any,
    countSource : PropTypes.number,
    content : PropTypes.any,
    iconColor : PropTypes.string,
    style : PropTypes.object,
    className : PropTypes.string
}


export default DropDownComponent
