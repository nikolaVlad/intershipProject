import styled from "styled-components";



export const Wrapper = styled.div`
    padding: 30px;
    background-color: #2e2e2e;
    border-radius: 10px;
    margin: 20px;
`

export const TextAreaComment = styled.textarea`
    width: 100%;
    background-color: transparent;
    color : white;
    padding : 10px;

    resize: none;
`

export const AddBtn = styled.button`
    padding: 8px;
    width: 120px;
    background-color: #383838;

    border-radius: 5px;
    color : orange;
    outline: none;
    border : none;

    :hover
    {
        background-color: #262626;
    }
`