import styled from "styled-components";

export const AppWrapper = styled.div`
    background-color: #1c1c1c;
   
    
    position: relative;
    width: 100%;
    height: 100%;
    color: white;
    margin: 0px 0px;
    margin-top: 140px;
    padding: 0px 0px;
    top: 0;
    bottom: 0;
    z-index: 10;
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;

    @media screen and (max-width: 1070px)
    {
        margin-top: 230px;
    }

    @media screen and (max-width: 530px)
    {
        margin-top: 250px;
    }


`;



export const PageContentWrapper = styled.div`
    display: flex;
    flex-direction: column;
    min-height: 66vh;
    min-width: 1500px;
    max-width: 1500px;
    flex-wrap: wrap;
    margin : 0px 20px;
    @media screen and (max-width: 2000px)
    {
        min-width: 90%;
        max-width: 90%;
      
    }

    * {
        @keyframes pageAnimation {
            from {
                opacity: 0;
                margin-top: -10px;
            }
            to {
                opacity: 1;
            }
        }

        animation: pageAnimation 0.4s;
       
    }
`;