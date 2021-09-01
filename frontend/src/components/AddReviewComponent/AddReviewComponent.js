/* eslint-disable react/prop-types */
import React, { useState } from 'react'
import {  Wrapper, SubmitButton } from './AddReviewComponentElements'
import CommentStore from '../../stores/CommentStore';
import {createAlert} from '../Common/Alert/Alert'

function AddReviewComponent( {productId} ) {

    const [comment , setComment] = useState('');

    const [error , setError] = useState(false);



    async function onSubmitHandler(e)
    {
        e.preventDefault();

        if(comment.trim().length < 1)
        {
            setError(true);
          
            return createAlert('Please input valid comment.' , 'error')
        }

        setComment(' ');
        
        return await CommentStore.add(productId , comment.trim());
    }



    return (
        <Wrapper>
            <form onSubmit={onSubmitHandler}>
                <textarea
                    placeholder='Type review here...'
                    value={comment}
                    onChange={(e) => {
                        setComment(e.target.value);
                    }}
                    onFocus = {() => setError(false)}
                    className={error ? 'errorField' : ''}
                ></textarea>
                <SubmitButton type='submit'> Add </SubmitButton>
            </form>
        </Wrapper>
    );
}

export default AddReviewComponent
