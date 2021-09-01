import styled from "styled-components";

export const Wrapper = styled.div`

    .linkComponent
    {
        z-index: 5;
    }

    .dropDownCart
    {
        z-index: 10;
    }

    &:hover {
        .linkIcon {
            color: ${props => props.onhovercolor || 'white'};
        }
        .dropDownCart {
            display: flex;
            flex-direction: column;
            opacity: 0.9;
        }
    }
`;

export const ProductCountPlace = styled.span`
    color : white;
    font-size: smaller;
    background-color: black;
    padding: 2px 10px;
    border-radius: 50%;
    position: absolute;
    margin-left: -30px;
    margin-top: 9px;
`


export const DropDownCart = styled.div`
    position: absolute; 
    background-color: #303030;
    border-radius : 1px;
    box-shadow: 5px 5px 10px black;
  
    margin-left: -110px;
    width : 430px;
    text-align: center;
    border-top: 2px solid orange;
    display: none;


    max-height: 300px;
    overflow-x: hidden;
    overflow-y:visible ;
    transition: all 3s;

    &::-webkit-scrollbar {
        width: 2px;
    }

    &::-webkit-scrollbar-thumb {
        background: gray;
        border-radius: 50px;
    }

`