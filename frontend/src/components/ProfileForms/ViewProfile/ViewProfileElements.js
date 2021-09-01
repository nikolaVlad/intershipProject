import styled from "styled-components";

export const ProfileCard = styled.div`
    flex-basis: 30%;
    background-color: transparent;
`;

export const ProfileData = styled.div`
    display: flex;
    padding: 40px;
    background-color: #303030;
    flex-direction: column;
    * {
        padding: 15px;
 
        display: flex;
        * {
            flex-basis: 50%;
           
        }
    }
`;

export const DataDiv = styled.div`
    color: orange;
    
`;

export const ProfileActions = styled.div`
    display: flex;
    justify-content: center;
    padding: 20px 0px;
    background-color: #303030;
`;

export const ActionbtnEdit = styled.button`
    border: none;
    padding: 10px;
    border-radius: 5px;
    background-color: #4f4f4f;
    color : white;
    margin-right: 40px;
    :hover
    {
        background-color: #262626;
    }

`;

export const ActionbtnDelete = styled.button`
    border: none;
    padding: 10px;
    border-radius: 5px;
    background-color: #4f4f4f;
    color : white;

    :hover
    {
        background-color:  #a32a2a;
    }
   
`
