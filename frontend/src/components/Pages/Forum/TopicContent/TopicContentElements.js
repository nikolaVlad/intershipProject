import styled from 'styled-components';

export const Wrapper = styled.div`
    color: gray;
    background-color: #1f1f1f;


    .PostTitleClass
    {
        margin : 20px;
    }
`;

export const TopicHead = styled.div`
    background-color: #262626;
    padding: 20px;
    display: flex;
    flex-direction: column;
   
    font-size : 30px;
    margin-bottom: 20px;
`;

export const TopicName = styled.div`
    display: flex;
    justify-content: center;
    color : white;
`;

export const TopicInfo = styled.div`
    display: flex;
    font-size: medium;
    justify-content: space-between;

    * {
        display: flex;
    }
    margin: 20px 0px;
    
`;



export const DataInfo = styled.div`
    color: yellow;
    margin-left: 20px;
`;

export const TopicBody = styled.div`
   
    padding: 10px 10px;

    
`;

export const AddPostBtn = styled.button`
     border: none;
    background-color: #333333;
    border-radius: 10px;
    margin: 20px;
    color: white;
    padding: 20px;
    font-size: 17px;
    color: yellow;

    :hover {
        background-color: #454545;
    }
`
