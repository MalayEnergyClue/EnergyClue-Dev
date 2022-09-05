import styled from '@emotion/styled';
import { NavLink } from 'react-router-dom';

export const Wrapper = styled.footer`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 16px 0;
    background-color: ${(props) => props.theme.colors.black};
    border-top: 1px solid ${(props) => props.theme.colors.light}30;
    ${(props) => props.theme.breakPoint.mobileAndTablet} {
        flex-wrap: wrap;
    }
`;

export const Container = styled.div`
    max-width: 1350px;
    width: 100%;
    padding: 0px 16px;
    margin: auto;
    position: relative;
    &.footer-container {
        display: flex;
        align-items: center;
        justify-content: space-between;
        padding: 0px 16px;
        ${(props) => props.theme.breakPoint.mobileAndTablet} {
            flex-wrap: wrap;
        }
        .copy-text {
            ${(props) => props.theme.breakPoint.smMobile} {
                text-align: center;
                width: 100%;
                order: 3;
                margin-top: 20px;
            }
        }
    }
`;

export const FooterLogo = styled.div`
    text-align: center;
    ${(props) => props.theme.breakPoint.smMobile} {
        order: 1;
    }
    a {
        text-decoration: none;
        color: inherit;
        img {
            width: 100%;
            max-width: 200px;
            ${(props) => props.theme.breakPoint.mobileAndTablet} {
                max-width: 170px;
            }
            ${(props) => props.theme.breakPoint.smMobile} {
                max-width: 150px;
            }
        }
    }
`;

export const FooterItems = styled.ul`
    display: flex;
    align-items: center;
    justify-content: space-around;
    margin: 0px 40px;
    ${(props) => props.theme.breakPoint.mobileAndTablet} {
        width: 100%;
        margin: 0px 0 20px 0;
        padding-bottom: 16px;
        border-bottom: 1px solid ${(props) => props.theme.colors.light};
    }
`;

export const FooterLinks = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin: 0px 50px;
    ${(props) => props.theme.breakPoint.mobileAndTablet} {
        width: 70%;
        margin: auto;
    }
    ${(props) => props.theme.breakPoint.smMobile} {
        width: 110%;
    }
`;

export const FooterItemList = styled.li`
    list-style-type: none;
    padding: 5px 15px;
    &:hover {
        background-color: ${(props) => props.theme.colors.light}50;
        border-radius: 15px;
        transition: all 0.3s;
    }
    ${(props) => props.theme.breakPoint.xsmMobile} {
        padding: 5px 5px;
    }
`;

export const FooterItemLink = styled(NavLink)`
    text-decoration: none;
    line-height: 15px;
`;

export const FooterSocialLink = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    ${(props) => props.theme.breakPoint.smMobile} {
        order: 2;
    }
`;

export const SocialButton = styled.button`
    width: 32px;
    height: 32px;
    background-color: ${(props) => props.theme.colors.black};
    color: ${(props) => props.theme.colors.light};
    border-radius: 100%;
    outline: none;
    border: none;
    font-size: 18px;
    line-height: 1;
    transition: all 0.3s ease-out;
    overflow: hidden;
    margin-left: 16px;
    a {
        display: flex;
        align-items: center;
        justify-content: center;
        color: inherit;
        font-size: inherit;
        line-height: inherit;
        width: 100%;
        height: 100%;
        border-radius: 100%;
    }
    &:hover {
        background-color: ${(props) => props.theme.colors.light};
        color: ${(props) => props.theme.colors.black};
    }
    ${(props) => props.theme.breakPoint.mobileAndTablet} {
        background-color: ${(props) => props.theme.colors.light};
        color: ${(props) => props.theme.colors.black};
    }
    ${(props) => props.theme.breakPoint.mobile} {
        margin-left: 8px;
    }
    ${(props) => props.theme.breakPoint.smMobile} {
        width: 24px;
        height: 24px;
        font-size: 14px;
    }
`;