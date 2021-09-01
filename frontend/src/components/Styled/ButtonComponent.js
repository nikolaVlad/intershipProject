import { NavLink } from "react-router-dom";
import styled from "styled-components";

const ButtonComponent = styled(NavLink)`


    background-color: ${props => props.bg || 'white'};
    color : ${props => props.color || 'black'};
    border : ${props => props.border || '1px solid black'};

    border-radius: ${props => props.borderradius || '0px'};



    width: ${props => props.width || '50%'};
    height: ${props => props.height || '40px'};

    max-width: 500px;

    
    display: flex;

    justify-content: center;

    align-items: center;
    
    text-decoration: none;
    
    &:hover
    {
        text-decoration: none;
        color : ${props => props.color || 'black'};
        background-color: ${props => props.bghover || ''};
    }

    &.disabled
    {
        background-color: #ffd666;
    }

`

export default ButtonComponent;
