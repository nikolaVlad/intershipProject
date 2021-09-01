import styled from "styled-components";
import { primaryColor } from "../Common/GlobalStyles";

export const Wrapper = styled.div`
    height: 230px;
    
    margin-bottom: 30px;

    background-color: #242424;

    padding: 20px;

    border-radius: 6px;

    form
    {
        display: flex;
        flex-direction: column;
    }

    textarea
    {
        background-color: transparent;

        color : white;

        margin-bottom: 12px;

        min-height: 150px;
        max-height: 150px;
        border-radius: 4px;

        padding: 10px;
      


        &:hover
        {
            background-color: #242424;
        }

        &.errorField
        {
            border : 1px solid orange;
        }


    }

`
export const styledTextArea = styled.textarea`
    background-color: green;
    width: 300px;
    height: 400px;
`

export const SubmitButton = styled.button`
    background-color: ${primaryColor};
    height: 40px;
    outline: none;
    border: 0px;
    width: 50%;
    border-radius: 2px;
`