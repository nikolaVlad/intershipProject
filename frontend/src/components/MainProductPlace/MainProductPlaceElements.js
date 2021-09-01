import styled from "styled-components";

export const Wrapper = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
`

export const MainProductImgs = styled.div`
    display: flex;
    flex-direction: column;
    flex-basis: 50%;
`


export const MainProductPic = styled.div`
    padding: 60px 0px;
    background-color: black;
    height: 550px;
 
`


export const MainProductInfo = styled.div`
   flex-basis: 45%;
    display: flex;
    flex-direction: column;
    max-height: 100%;
`;


export const MainInfo = styled.div`

`


export const DescriptionInfo = styled.div`
    padding-right: 150px;
    margin-top: 50px;


    max-width: 60%;



    @media screen and (max-width : 1600px)
    {
        max-width: 80%;
    }
`;

export const ActionPlace = styled.div`
    display: flex;
`



