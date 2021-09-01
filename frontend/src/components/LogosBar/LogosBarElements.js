import styled from "styled-components";

export const Wrapper = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-around;

    font-size: 24px;

    margin: 15px 0;

    color: white;

    
    padding : 20px ;


    @media screen and (max-width : 786px)
    {
        font-size: 14px;
        margin: 2px;
    }
    

    div
    {
        


        padding: 10px;
       
        width: 20%;
        
        display: flex;
        justify-content: center;

        margin: 0px 10px;

       
        opacity: 0.4;

      


        font-family: 'Courier New', Courier, monospace;

        @media screen and (max-width : 786px)
        {
            margin: 2px;
        }

    }

`