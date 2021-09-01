import styled from 'styled-components';
import { primaryColor } from '../../Common/GlobalStyles';

export const Wrapper = styled.div`
    
    display: flex;
    justify-content: center;
    align-items: stretch;
    
    form {
        display: flex;
        flex-direction: column;
       
        
    }
    
    height: 100vh;
   

   
`;

export const FormWrapper = styled.div`
    position: relative;
    background-color: #262626;
    border-radius: 10px;
    padding: 40px;
    margin-top: 20px;
    height: min-content;
   
`;

export const LogoImg = styled.div``;

export const RegBtn = styled.button`
    transition: all 0.3s;
    height: 40px;
    border-radius: 5px;
    border: none;
    color: ${primaryColor};
    background-color: #363636;
    margin: 0px 50px;
    :hover {
        background-color: #303030;
    }
    margin-top: 40px;
`;

export const IconDiv = styled.div`
    width: 100%;
    height : 10px;
    display: flex;
    align-items: center;
    justify-content: center;
    position: absolute;
    top : 10px;
    left : 4px;
    border-radius: 20px;

    *
    {
        color : orange;
        width: 100px;
        height: 150px;
    }
   
`

export const FormRow = styled.div`
    display: flex;
`