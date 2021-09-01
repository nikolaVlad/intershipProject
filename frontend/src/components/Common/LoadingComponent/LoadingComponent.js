import styled from 'styled-components';
import React from 'react'
import ClipLoader from "react-spinners/ClipLoader";

function LoadingComponent() {
    return (
        <Wrapper>
            <ClipLoader color={'orange'} loading={true}  size={150} />
        </Wrapper>
    )
}

const Wrapper = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height : 100vh;

`


export default LoadingComponent;
