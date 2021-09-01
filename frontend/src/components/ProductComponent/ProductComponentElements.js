import styled from "styled-components";

export const Wrapper = styled.div`
    display: flex;
    flex-wrap: wrap;
    flex-direction: row;
    min-height: 350px;
    margin-top: 50px;
    background-color: #141414;
`


export const ImagePlace = styled.div`
    display: flex;
    margin-right: 60px;
    flex-basis: 25%;
    max-height: 350px;
`

export const ProductInfo = styled.div`
    display: flex;
    flex-basis: 40%;
    justify-content: space-evenly;
    flex-direction: column;
    padding: 10px;

`

export const CategoriesPlace = styled.div`
    color: gray;
    
    & *
    {
       margin-right: 10px;
    }
`

export const SecondaryInfo = styled.div`
    margin-bottom: 40px;
    display: flex;
    flex-direction: column;
    width: 100%;

`

export const DescriptionText = styled.div`
    color: gray;
    margin-top: -10px;
`;


export const ProductActions = styled.div`
    display: flex;
    flex-direction: column;

    justify-content: space-evenly;

    align-items: flex-end;


    flex-basis: 30%;

    font-size: larger;
`;


export const PrimaryInfo = styled.div``;
