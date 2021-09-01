import React from 'react'



import {  ItemPlace, Wrapper } from './ImageRowElements'


import PropsTypes from 'prop-types';


function ImageRow({itemsList, className, style, ref , wrap}) {
    return (
        <Wrapper className = {className} style = {style} ref = {ref} wrap = {wrap}>
            {itemsList.map((item,index) =>
                {
                    return (
                        <ItemPlace flexbasis={item.flexBasis} key={index}>
                            {item.value}
                        </ItemPlace>
                    );
                })}
           
        </Wrapper>
    );
}

ImageRow.propTypes = {
    itemsList : PropsTypes.array,
    className : PropsTypes.string,
    style : PropsTypes.any,
    ref : PropsTypes.any,
    wrap : PropsTypes.string

}





export default ImageRow;
