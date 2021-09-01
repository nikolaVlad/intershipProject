import styled from "styled-components";


export const GaleryRowPlace = styled.div`
    position: relative;

`



export const Wrapper = styled.div`
    display: flex;
    flex-wrap: nowrap;

    overflow-x: scroll;

    transition: all 0.4s;

    scroll-behavior: smooth;

    &::-webkit-scrollbar {
        height: 5px;
        
    }

    &::-webkit-scrollbar-thumb {
        background: gray;
        border-radius: 50px;
    }

   


  
`;

export const GaleryItem = styled.div`
    min-width: 25%;
    &:hover
    {
        filter: brightness(0.7);
       
        cursor: pointer;
    }


    &:active
    {
        filter: brightness(0.6);
    }

    
   
`


export const Arrows = styled.div`
    position: absolute;
    top: 40%;
    left: 0;
    width: 100%;
    display: flex;
    justify-content: space-between;

    background-color: red;

    background: transparent;
`

export const ScrollButton = styled.div`
    background-color: transparent;
    height: 100%;
    cursor: pointer;
    font-size: large;
    color: gray;
    background-color: black;
    opacity: 0.6;

    &:hover
    {
        opacity: 0.8;
    }
`