import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

export const Wrapper = styled.div`
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
`;

export const Sidenav = styled.div`
    width: 30%;
    height: 100%;
    display: flex;
    flex-direction: column;
    padding: 10px 20px 30px 40px;
    justify-content: space-between;
    background-color: #151515;
    min-height: 60vh;
`;

export const SidenavSection = styled.div`
    display: flex;
    flex-direction: column;
    padding-top: 20px;
    
`;

export const SidenavLinkComponent = styled(NavLink)`
    margin: 15px 0;
    color: ${(props) => props.color || 'white'};

    &:hover {
        text-decoration: none;
        color: ${(props) => props.hoverColor || 'gray'};
    }

    &.active {
        color: ${(props) => props.hovercolor || 'white'};
    }
`;

export const MainGamePic = styled.div`
    width: 70%;
    position: relative;
    @media screen and (max-width: 1000px) {
        display: flex;
    }
   
    overflow: hidden;

    img
    {
        min-height: 60vh;
        background-position-x: center;
        background-position-y: center;
    }
`;

export const SidenavIcon = styled(FontAwesomeIcon)`
    margin-right: 10px;
`;
