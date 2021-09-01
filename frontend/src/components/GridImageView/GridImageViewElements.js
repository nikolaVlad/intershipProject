import styled from 'styled-components';

export const Wrapper = styled.div`
    width: 100%;

    display: grid;

    grid-template-columns: 1fr 1fr 1fr 1fr;
    grid-template-rows: 1fr 1fr 1fr 1fr;
    width: 100%;
    height: 100vh;

    @media screen and (max-width: 1000px) {
        display: flex;
        flex-direction: column;
        height: ${(props) => props.smheight || 'auto'};
    }
`;

export const GridImagePlace = styled.div`
    position: relative;
    grid-area: ${(props) => props.gridarea || ''};
    overflow: hidden;
    height: 100%; 
`;
