import styled from "styled-components";

export const Wrapper = styled.div`
    display: flex;
    flex-direction: row;
    flex-wrap: ${props => props.wrap || 'wrap'};
    justify-content: center;
    flex-direction: column;

    @media screen and (min-width : 1000px)
    {
        flex-direction: row;
    }


`


export const ItemPlace = styled.div`
    flex-basis: ${props => props.flexbasis || '25%'};
    position: relative;
    overflow: hidden ;
`



