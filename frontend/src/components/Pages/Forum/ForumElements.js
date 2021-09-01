import { NavLink } from 'react-router-dom';
import styled from 'styled-components';
import { primaryColor } from '../../Common/GlobalStyles';

export const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    .activeLink {
        color: orange;
        background-color: black;
        border-radius: 10px;

        :hover {
            background-color: black;
        }
    }
    height: 100%;

    
`;

export const ForumPlace = styled.div`
    margin-top: 30px;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    flex-grow: 1px;
`;

export const SideNav = styled.div`
    background-color: transparent;
    flex-basis: 20%;
`;

export const Content = styled.div`
    flex-basis: 78%;
    margin-left: 2%;
    background-color: transparent;
`;

export const PicturePlace = styled.div`
    width: 100%;
    height: 35vh;
    background: url(${(props) => props.src});
    background-repeat: no-repeat;
    background-position: center;
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    opacity: 0.8;
`;

export const Header = styled.div`
    display: flex;
    justify-content: center;
    align-items: flex-end;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.322);
    width: 100%;

    span {
        border: none;
        width: 100%;
        text-align: center;
        color: orange;
        background-color: rgba(0, 0, 0, 0.473);
        font-size: 27px;
        height: 100%;
        display: flex;
        align-items: center;
        justify-content: center;
        flex-direction: column;

        div {
            margin: 10px 0px;
        }
    }
`;

export const LinksPlace = styled.div`
    background-color: #363636;
    display: flex;
    flex-direction: column;

    padding: 20px;
    min-height: 500px;
    max-height: 900px;
    overflow: hidden;
    overflow-y: scroll;
    a:hover {
        color: ${primaryColor};
    }

    &::-webkit-scrollbar {
        width: 3px;
        height: 80%;
    }

    &::-webkit-scrollbar-thumb {
        background: gray;
        border-radius: 50px;
    }
`;

export const NewTopicBtn = styled.button`
    border: none;
    background-color: #242424;
    border-radius: 5px;
    margin: 20px 0px;
    color: white;
    padding: 20px;
    color: orange;
    font-size: 17px;

    :hover {
        background-color: #171717;
    }
`;

export const NewPostBtn = styled.button`
    border: none;
    background-color: #333333;
    border-radius: 10px;
    margin: 20px;
    color: white;
    padding: 20px;
    font-size: 17px;
    color: yellow;

    :hover {
        background-color: #292929;
    }
`;

export const TopicButton = styled(NavLink)`
    width: 100%;
    outline: none;
    background-color: #1f1f1f;
    color: white;
    border: none;
    text-align: left;
    margin: 8px 0px;
    height: max-content;
    color: orange;
    overflow: auto;
    min-height: 50px;
    padding: 20px;

    &:hover {
        background-color: #2b2b2b;
        text-decoration: none;
    }
`;

export const HelloContent = styled.div`
    color : gray;
    display: flex;
    justify-content: center;
    align-items : center;
    height: 50%;
    font-size: 30px;
`