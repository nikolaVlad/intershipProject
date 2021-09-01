import { NavLink } from "react-router-dom";
import styled from "styled-components";

export const Wrapper = styled.div`
    top : 0;
    position: fixed;
    width: 100%;
    background-color: #2a2a2a;
    display: flex;
    justify-content: center;
    z-index: 30;
`


export const Nav = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    flex-wrap: wrap;

    padding : 20px 0px;
    width: 1500px;
   
    *
    {
        @keyframes example {
        from {
           
            opacity: 0;
            margin-top: -1px;
        }
        to {
           
           
        }
    }

    animation: example 0.3s;
    }
    
    
`

export const NavGroup = styled.div`
    display: flex;
    padding: 15px;
    justify-content: center;
    

`
export const NavSecondary = styled.div`
    display: flex;
`

export const LogoSection = styled.div`
    display: flex;
    justify-content: center;
    overflow: hidden;
    align-items: center ;
    padding-left: 10px;
    width: 140px;
    img
    {
        width: 100%;
        height: 100%;
        object-fit: fill;
    }
    
`

export const LinkComponent = styled(NavLink)`
    margin: 0px 20px;
    color : ${props => props.color || 'gray'};


    &:hover
    {
        text-decoration: none;
        color : ${props => props.hovercolor || 'white'};
    }


    &.active
    {
        color : ${props => props.hoverColor || 'white'}
    }
  
`

