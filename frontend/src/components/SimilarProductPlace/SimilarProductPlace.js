import React from 'react'
import ImageRow from '../Common/ImageRow/ImageRow'
import ImageComponent from '../Styled/ImageComponent'
import PropTypes from 'prop-types';




function SimilarProductPlace({images}) {

    let items = [
        {
            value : <ImageComponent src = {images[0].path_thumbnail} />,
            flexBasis : '50%'
        },
        {
            value : <ImageComponent src = {images[1].path_thumbnail} />,
            flexBasis : '50%'
        },
        {
            value : <ImageComponent src = {images[2].path_thumbnail} />,
            flexBasis : '50%'
        },
        {
            value : <ImageComponent src = {images[3].path_thumbnail} />,
            flexBasis : '50%'
        },
    
    ]


    return (
        <>
           <ImageRow itemsList = {items}  />      
        </>
    )
}


SimilarProductPlace.propTypes = 
{
    images : PropTypes.array
}



export default SimilarProductPlace
