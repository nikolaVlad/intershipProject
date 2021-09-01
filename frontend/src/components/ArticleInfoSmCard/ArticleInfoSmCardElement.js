import styled from "styled-components";

export const Wrapper = styled.div`
    position:absolute;
    top: 0;
    left: 0;

    display: flex;
    flex-direction: column;


    width: 100%;
    height: 100%;

    justify-content: center;
    align-items: center;


    @media  screen and (max-width : 786px)
    {
        flex-direction: column;
    }

    
` 


