import styled from 'styled-components';

export const Wrapper = styled.div`
    flex-basis : 50%;
 

`

export const EditForm = styled.form`
    display: flex;
    flex-direction: column;
    input {
        background-color: transparent;
        outline: none;
        border: none;
        color: orange;
        background-color: #454545;


        &.errorField
        {
            border: 1px solid #870000;
        }
    }
    
`;

export const ActionbtnCancel = styled.button`
    border: none;
    padding: 10px;
    border-radius: 5px;
    background-color: #4f4f4f;
    color: white;

    :hover {
        background-color: ${props => props.hovercolor || '#a32a2a'};
    }
`;

export const PasswordBtnChange = styled.button`
        color: orange;
        background-color: transparent;
    

`