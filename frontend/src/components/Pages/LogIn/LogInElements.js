import styled from "styled-components";
import { primaryColor } from "../../Common/GlobalStyles";

export const Wrapper = styled.div`
    padding : 30px;
    display : flex;
    flex-direction: column;
    align-items: center;
    justify-content: top;
    width: 100%;
    height : 100vh;
    position: relative;
    margin-top: 20px;
    *
    {
        margin: 10px 0px;
    }

  

    input
    {
        transition: all 0.5s;
        width: 500px;
        height: 50px;
      
        border : none;
        background-color: transparent;
        color : white;
        border-bottom: 1px solid orange;
       

        :focus
        {
            outline: none;
            border-bottom: 1px solid yellow;
        }      
  
        

    }


`



export const LogInBtn = styled.button`
    transition: all 0.3s;
    width: 100%;
    height: 40px;
    border-radius: 5px;
    border : none;
    color : ${primaryColor};
    background-color: #363636;

    :hover
    {
        background-color: #303030 ;
    }

`



export const LogoImg = styled.img`
    overflow: hidden;
    height: 90px;
`

export const FormWrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    background-color: #262626;
    border-radius: 20px; 
    padding: 90px;
`