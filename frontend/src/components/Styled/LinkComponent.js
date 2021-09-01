import { NavLink } from "react-router-dom";
import styled from "styled-components";

const LinkComponent = styled(NavLink)`

    color : ${props => props.color || 'gray'};

    &:hover
    {
        color : ${props => props.hovercolor || 'white'};
        text-decoration: none;
    }
`;

export default LinkComponent;