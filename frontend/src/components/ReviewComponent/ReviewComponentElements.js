import styled from 'styled-components';

export const Wrapper = styled.div`
    display: flex;
    flex-direction: column;

    width: 70%;

   
`;

export const ImagePlace = styled.div`
    flex-basis: 20%;
    margin-right: 20px;

    width: 100%;
    max-width: 50px;
    height: 50px;

    padding-top: 8px;
    padding-left: 10px;
`;

export const UserNamePlace = styled.div`
    margin-top: 10px;
    margin-bottom: 14px;
`;


export const ContentPlace = styled.div`
    display: flex;
    flex-direction: column;
   
    flex-basis: 80%;

    min-height: 50px;

    justify-content: space-around;

`

export const ReviewDate = styled.span`
    color: gray;
    margin-top: -13px;
`;



export const SeeAllBtn = styled.button`
    background-color: transparent;

    color: white;


    border: 1px solid gray;

    &:hover
    {
        color : white;
        opacity: 0.9;
    }

    display: ${props => props.isHidden ? 'none' : 'block'};

    border-radius: 20px;

    opacity: 0.7;

    width: 100%;


`

export const NoLoggedAlert = styled.div`
    margin-bottom: 30px;
    color : gray;
    font-size: large;
    
`

export const ReviewText = styled.div`
    border-top: 100px;

    color: gray;
    padding: 20px 0px;

    transform: height 2s;
`;


export const EditCommentPlace = styled.div`
    margin-top: 20px;


    textarea
    {
        background-color: transparent;
        color : white;
        padding: 10px;
        resize: none;
    }


    button
    {
        width: 100px;
        margin-top: 10px;
        margin-right : 10px;
        margin-bottom: 10px;
        border: none;
        color : white;
        padding : 5px;
        border-radius: 5px;
    }
`

export const SaveBtn = styled.button`
    background-color: orange;
`

export const CancelBtn = styled.button`
     background-color: #4f4f4f;
`