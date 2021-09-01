import styled from "styled-components";

export const Wrapper = styled.div`
    
        overflow: hidden;
        height: 100%; 

    .InfoBox {
        display: none;
    }

    &:hover .InfoBox {
        
        top: 0;
        left: 0;

        display: flex;
        flex-direction: column;

        width: 100%;
        height: 100%;

        justify-content: center;
        align-items: center;
    }

    &:hover .ImageBox {
        transition: all 0.2s;
        filter: blur(2px);
        filter: brightness(50%);
    }
`;