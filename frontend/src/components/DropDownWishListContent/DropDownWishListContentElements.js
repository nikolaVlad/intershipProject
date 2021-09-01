import styled from "styled-components";


export const ActionPlace = styled.div`
    display: flex;
    flex-direction: row;
    margin-top: 5px;
    *
    {
        flex-basis: 50%;
    }

    button
    {
        height: 50px;
        border: none;
    }

    button:hover
    {
        background-color: gray;
        transition: 0.1s all;
    }


`

export const RemoveBtn = styled.button`
    color : orange;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    background-color: transparent;
`

export const SeeAllBtn = styled.button`
    color : yellow;
    background-color: transparent;
`