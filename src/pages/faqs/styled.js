import styled from '@emotion/styled';

export const Wrapper = styled.div`
    width: 100%;
    min-height: 100vh;
    margin-top: 150px;
`;

export const Container = styled.div`
    max-width: 1350px;
    width: 100%;
    margin: auto;
    padding: 0px 16px 40px 16px;
    .underline {
        text-decoration: underline;
    }
`;

export const Content = styled.div`
    padding: 16px;
    border-radius: 15px;
    box-shadow: 0px 2px 4px 0px ${(props) => props.theme.colors.shadow}50,
                0px -2px 4px 0px ${(props) => props.theme.colors.shadow}50;
    margin: 20px 0;
`;

export const Flex = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
    font-weight: 400;
    h1 {
        font-size: 16px;
        line-height: 1.2;
        font-weight: 400;
    }
`;

export const FAQHeading = styled.h1`
    font-size: 16px;
    line-height: 1.2;
    flex: 80%;
    @media(max-width: 576px) {
        font-size: 16px;
    }
    .heading {
        display: inline;
        line-height: 1.2;
        font-weight: 400;
        font-size: 16px;
    }
`;

export const IconContainer = styled.div`
    width: 42px;
    height: 42px;
    border-radius: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: #333333;
    overflow: hidden;
    @media(max-width: 767px) {
        width: 38px;
        height: 38px;
    }
    @media(max-width: 576px) {
        width: 32px;
        height: 32px;
    }
`;

export const Icon = styled.span`
    position: relative;
    width: 100%;
    height: 100%;
    border-radius: 100%;
    cursor: pointer;
    &:after {
        position: absolute;
        content: '';
        right: 25%;
        display: block;
        width: 50%;
        top: 46%;
        height: 5px;
        border-radius: 2px;
        background-color: #FFF;
        @media(max-width: 576px) {
            height: 3px;
        }
    }
    &:before {
        position: absolute;
        content: '';
        right: 25%;
        top: 46%;
        display: block;
        width: 50%;
        height: 5px;
        border-radius: 2px;
        background-color: #FFF;
        transition: all 0.3s;
        transform: rotate(${({ active }) => active ? '0deg' : '90deg'});
        @media(max-width: 576px) {
            height: 3px;
        }
    }
`;

export const TextContent = styled.div`
    padding: 0;
    margin-top: 10px;
    ${(props) => props.theme.breakPoint.mobileAndTablet} {
        margin-top: 20px;
    }
`;

export const Summary = styled.p`
    div {
        font-weight: 400;
        line-height: 1.2;
    }
`;