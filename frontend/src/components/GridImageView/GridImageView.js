import React from 'react'

import PropsTypes from 'prop-types';

import { Wrapper , GridImagePlace } from './GridImageViewElements'



function GridImageView({gridTemplateRows , gridTemplateColumns, gridItems }) {
    return (
        <Wrapper gridtemplatecolumns = {gridTemplateColumns} gridtemplaterows = {gridTemplateRows} >
           {gridItems.map((item , index) =>
           {
                return(
                    <GridImagePlace key = {index} gridarea = {item.gridArea}>
                        {item.value}
                    </GridImagePlace>
                )
           })}
            


        </Wrapper>
    )
}


GridImageView.propTypes = 
{
    gridTemplateRows : PropsTypes.string,
    gridTemplateColumns : PropsTypes.string,
    gridItems : PropsTypes.array
}


export default GridImageView
