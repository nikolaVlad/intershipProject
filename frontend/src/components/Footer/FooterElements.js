import styled from 'styled-components';

export const ContentWrapper = styled.div`
    width: 100%;
    display: flex;
    justify-content: center;
    background-color: #2a2a2a;
    top: 100%;
    padding-top: 20px;
    margin-top: 50px;
`;

export const Wrapper = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;

    max-width: 1500px;

    * {
        margin: 10px 10px;
    }

    @media screen and (max-width: 768px) {
        * {
            font-size: small;
        }
    }
`;

export const LinkPlace = styled.div`
    display: flex;
    flex-direction: 'row';
    justify-content: space-between;

    padding: 0px 60px;

    margin-bottom: 30px;

    div {
        display: flex;
        flex-direction: column;
    }
`;

export const ContactPlace = styled.div`
    display: flex;
    justify-content: space-between;
    border-top: 1px solid rgba(122, 122, 122, 0.733);
    padding: 20px;
    margin: 0px 40px;

    @media screen and (max-width: 768px) {
        * {
            margin: 3px 3px;
            font-size: small;
        }
    }
`;
