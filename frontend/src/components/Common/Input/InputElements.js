import styled from 'styled-components';
export const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    
    small {
        margin: 0px 50px;
        color : white
    }
`;


export const StyledInput = styled.input`
    position: relative;
    transition: all 0.7s;
    width: 500px;
    height: 50px;

    border: none;
    background-color: transparent;
    color: white;
    border-bottom: 1px solid orange;
    :focus {
        outline: none;
        border-bottom: 1px solid yellow;
    }

    &.failed {
        border-bottom: 1px solid red;
    }

    padding-right: ${props => props.passwordVariant ? '20px' : '0px'};

`;


export const EyeBtn = styled.span`
    position: absolute;
    height: 50px;
    padding-top : -20px;
    border : none;
    right: 20px;
    font-size: larger;
    color : orange;
    bottom: 0px;
    top : 2px;

    :hover
    {
        color : yellow;
    }
    
`