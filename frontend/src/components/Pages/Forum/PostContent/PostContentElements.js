import styled from 'styled-components';

export const Wrapper = styled.div``;

export const PostTitle = styled.div`
    background-color: #2e2d2d;
    display: flex;
    flex-direction: column;
    padding: 10px;
    border-radius: 10px;
    justify-content: space-around;
`;

export const TitleText = styled.h2`
    display: flex;

    justify-content: center;
`;

export const PostDetails = styled.div`
    display: flex;
    justify-content: space-between;
    margin-top: 30px;
    color: gray;

    span {
        color: orange;
    }
`;
