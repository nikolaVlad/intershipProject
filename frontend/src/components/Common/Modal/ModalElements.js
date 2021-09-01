import styled from 'styled-components';

export const ModalWrapper = styled.div`
    &.hidden {
        display: none;
    }
    position: fixed ;
    top : 20vh;
    left : 0;
    width: 100%;
    margin : 20px;
    padding: 0px;
    z-index: 100;
    height: 100% !important;
  
    input
    {
        background-color: transparent;
        width: 100%;
        border : 1px solid gray;
        color : yellow;
        padding : 10px;
        border-radius: 5px;
        outline: none;
    }

    select
    {
       
        background-color: transparent;
        width: 100%;
        border : 1px solid gray;
        color : yellow;
        padding : 10px;
        border-radius: 5px;
        outline: none;

        option
        {
            background-color: #4f4f4f;
            padding : 5px;
        }
       
    }

    textarea
    {
        background-color: transparent;
        width: 100%;
        border : 1px solid gray;
        color : yellow;
        padding : 10px;
        border-radius: 5px;
        outline: none;
        resize: none;
    }

`;
export const Wrapper = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
`;

export const ModalForm = styled.div`
    background-color: #2e2e2e;
    border-radius: 5px;
    z-index: 2;

`;

export const HeadingPlace = styled.div`
    padding: 2px;
    display: flex;
    background-color: #3d3d3d;
    border-top-left-radius: 5px;
    border-top-right-radius: 5px;
    justify-content: flex-end;
`;

export const ActionPlace = styled.div`
    padding: 20px;
    display: flex;
    justify-content: center;

    * {
        margin: 0px 20px;
        padding: 10px;
        width: 120px;
    }

    button {
        color: yellow;
        border: none;
        border-radius: 5px;
    }
`;

export const BodyPlace = styled.div`
    padding: 50px;
    color: orange;
    display: flex;
    flex-direction: column;
   
`;

export const BtnAccept = styled.button`
    background-color: #525252;
    
    :hover {
        background-color: #363636;
    };
`;
export const BtnCancel = styled.button`
    background-color: #3d3d3d;

    :hover
    {
        background-color: #262626 !important;
    }
    
`;

export const EsicBtn = styled.button`
    background-color: transparent;
    border: none;
    outline: none;
    padding: 1px 15px;
    color: gray;
`;
export const BackgroundWrapper = styled.div`
    position: fixed; 
    z-index: 1;
    padding: 20px;
    left: 0;
    top: 0;
    width: 100%; 
    height: 100%;
    overflow: auto; 
    background-color: rgb(0, 0, 0);
    background-color: rgba(0, 0, 0, 0.4);
`;
