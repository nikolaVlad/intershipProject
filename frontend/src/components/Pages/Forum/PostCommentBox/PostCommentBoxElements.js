import styled from 'styled-components';

export const Wrapper = styled.div`
    padding: 30px;
    background-color: #2e2e2e;
    border-radius: 10px;
    margin: 20px;
`;

export const TitlePlace = styled.div`
    display: flex;
    flex-direction: column;
`;

export const TextPlace = styled.div`
    margin-top: 20px;
`;

export const ActionPlace = styled.div`
    margin-top: 4px;

    button {
        background-color: transparent;
        border: none;
        font-size: larger;
        border-radius: 10px;
        padding: 9px;

        :hover {
            background-color: #424242;
        }
    }
`;

export const DeleteBtn = styled.button`
    color: yellow;
`;

export const EditBtn = styled.button`
    color: orange;
    margin-right: 10px;

    &.active
    {
        background-color: #424242;
    }
`;

export const EditTextPlace = styled.div`
    width: 100%;

    button {
        border: none;
        outline: none;
        padding: 5px;
        width: 130px;
        border-radius: 5px;
        background-color: #474747;
        color: orange;
    }
`;

export const EditInput = styled.textarea`
    -webkit-box-sizing: border-box;
    -moz-box-sizing: border-box;
    box-sizing: border-box;
    width: 100%;
    resize: none;
    background-color: transparent;
    color: white;
    padding: 10px;
    border: 1px solid gray;

    &::-webkit-scrollbar {
        width: 3px;
        height: 80%;
    }

    &::-webkit-scrollbar-thumb {
        background: gray;
        border-radius: 50px;
    }
`;

export const SaveBtn = styled.button`
    margin-right: 20px;

    :hover {
        background-color: #262626;
    }
`;

export const CancelBtn = styled.button`
    :hover {
        background-color: #666666;
    }
`;
