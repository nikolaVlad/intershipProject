import styled from "styled-components";

export const Wrapper = styled.div`
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

export const ItemPlace = styled.span`

    &:nth-child(even) 
    {
        background-color: #464545;
    }
    padding : 20px;
    display: flex;
    flex-direction: row;
    justify-content: space-around;

    div , a
    {
        flex-basis : 50%;
    }
    align-items: center;


    &:hover
    {
        transition: 0.3s all;
        background-color : black;

        

    }

`

export const TotalPlace = styled.div`
    padding: 20px;
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    position: fixed;
    width : 430px;

    background-color: gray;
   
`

export const RemoveButton = styled.button`
    background-color: transparent;
    color : whitesmoke;
    border : 0px;
    font-size: small;
    color : orange;
`