import styled from "styled-components";

export const Wrapper = styled.div`
    width: 100%;
    height: 100%;
    position: relative;
`

export const SearchInput = styled.input`
    width: 100%;
    padding: 10px;
    background-color: transparent;
    border : none;
    border-bottom: 1px solid gray;
    outline: none;
    color : ${props => props.color || 'white'};
    position: relative;
    padding-left:43px ;
    padding-bottom: 5px;
    :focus
    {
       
        color : white;
    }
    position: relative;

  
`

export const IconPlace = styled.span`
    position: absolute;
    left : 0px;
    top : 5px;
    font-size: larger;
    height: 89%;
    padding : 0px 9px;
    color : ${props => props.color ||'white' };
`