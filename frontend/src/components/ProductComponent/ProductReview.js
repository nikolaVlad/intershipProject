/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React, { useEffect, useState } from 'react'

function ProductReview({charrArray,maxChars}) {

    const text = charrArray;
    const [isReadMore, setIsReadMore] = useState(true); 
    const [visible, setVisible] = useState(true);

    const toggleReadMore = () => {
      setIsReadMore(!isReadMore);
    };

    useEffect(() =>
    {

        if(charrArray.length <= maxChars)
        {
           
            setVisible(false);
        }
    }, []);


    return (
        <p className='text'>
            {isReadMore ? text.slice(0, `${maxChars}`) : text}

            {visible && (
                <span
                    onClick={toggleReadMore}
                    style = {isReadMore ? {color : 'white' , cursor : 'pointer'} : {color : '#c2c2c2' , cursor : 'pointer'}}
                >
                    {isReadMore ? '...read more' : ' show less'}
                </span>
            )}
        </p>
    );
  };
 



export default ProductReview
