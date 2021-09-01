import styled from 'styled-components';

export const Wrapper = styled.div`
    display: flex;
`;



export const GamesInfoPlace = styled.div`
    flex-basis: 79%;
    margin-left: 1%;
    background-color: #171717;
    padding : 0px 30px;

`;

export const MenuButtons = styled.div`
    padding: 20px 0px;
   

    button {
        margin: 0px 5px;

        border: none;
        border-radius: 5px;

        padding: 10px 0px;
        width: 200px;

        background-color: #2b2b2b;
        color: yellow;
    }

  

    .disabledClass {
        color: white;
        opacity: 0.4;

        :hover
        {
            opacity: 0.8;
        }
    }
`;


export const PursacheMenuBtn = styled.button`
   
`


export const HistoryMenuBtn = styled.button`
    padding : 10px 0px;
    width: 150px;
    background-color: #4f4f4f;
   

    
`
