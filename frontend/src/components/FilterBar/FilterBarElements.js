import { NavLink } from "react-router-dom";
import styled from "styled-components";

export const Wrapper = styled.div`
    display: flex;
    position: relative;
    
    background-color: #999999;
    color: black;

    padding: 20px;

    animation: none ;
    

    justify-content: space-between;

    flex-direction: row;


    
    flex-wrap: wrap;

    align-items: center;

    margin-top: -23px;



    @media screen and (max-width : 786px)
    {
        display: flex;
        position: relative;

        justify-content: space-evenly;

        padding: 20px;

        flex-direction: column;

        flex-wrap: wrap;

        align-items: center;


        font-size: small;
    }

`


export const LeftSide = styled.div`
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    flex-basis: 50%;
    max-width: max-content;
`


export const RightSide = styled.div`
    width: 300px;
    flex-wrap: wrap;
    flex-basis: 40%;
`


export const FilterMenu = styled.div`
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    font-size: small;
`



export const FilterButton = styled(NavLink)`
    padding: 10px;
    border-radius: 5px;
    border-width: 0px;
    margin: 5px 5px;

    border: 1px dashed yellow;

    background-color: ${props => props.bg || 'transparent'};

    cursor: pointer;

    color: ${props => props.color || 'black'};


    &:hover
    {
        background-color: ${props => props.hoverbg || 'transparent'};
        text-decoration: none;

        color: ${props => props.hoverColor || 'black'};

    }

    &:active
    {
        background-color: yellow;
    }




`