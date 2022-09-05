import styled from '@emotion/styled';

export const Wrapper = styled.div`
    width: ${({ active }) => active ? '100%' : 'calc(100% - 50px)'};
    position: ${({ active }) => active ? 'sticky' : 'relative'};
    top: 0;
    margin: ${({ active }) => active ? '0' : '25px'};
    color: ${(props) => props.theme.colors.light};
    background-color: ${(props) => props.theme.colors.black};
    z-index: 10;
    transition: all 0.3s;
    border-radius: ${({ active }) => active ? '0' : '25px'};
    box-shadow: 1px 4px 5px ${(props) => props.theme.colors.shadow}75;
    ${(props) => props.theme.breakPoint.mobileAndTablet} {
        width: 100%;
        position: sticky;
        margin: 0;
        border-radius: 0px;
    }
`;

export const Nav = styled.div`
    max-width: 1350px;
    width: 100%;
    display: flex;
    justify-content: space-around;
    align-items: center;
    margin: auto;
    padding: 0 15px;
    ${(props) => props.theme.breakPoint.mobileAndTablet} {
        height: 69px;
    }
`;

export const MenuIcon = styled.div`
    display: none;
    font-size: 32px;
    ${(props) => props.theme.breakPoint.mobileAndTablet} {
        display: block;
    }
`;

export const Logo = styled.div`
    flex: 15%;
    a {
        text-decoration: none;
        color: inherit;
        img {
            width: 100%;
            ${(props) => props.theme.breakPoint.mobileAndTablet} {
                max-width: 140px;
            }
        }
    }
`;

export const NavItems = styled.ul`
    flex: 70%;
    display: flex;
    justify-content: center;
    align-items: center;
    &.responsive {
        display: none;
    }
    ${(props) => props.theme.breakPoint.mobileAndTablet} {
        &.desktop {
            display: none;
        }
        &.responsive {
            display: flex;
            position: absolute;
            top: 69px;
            left: 0;
            width: 100%;
            height: calc(100vh - 69px);
            transition: all 0.3s;
            flex-direction: column;
            transform: translateX(${({ toggle }) => toggle ? '0%' : '-100%'});
            background-color: ${(props) => props.theme.colors.black};
        }
    }
`;

export const ListItem = styled.li`
    list-style-type: none;
    margin: 0px 15px;
    a {
        text-decoration: none;
        color: ${(props) => props.theme.colors.light};
        padding: 25px 15px;
        position: relative;
        display: inline-block;
        &:after {
            content: '';
            position: absolute;
            width: 100%;
            transform: scaleX(0);
            bottom: 0;
            left: 0;
            height: 2px;
            background-color: ${(props) => props.theme.colors.light};
            transform-origin: bottom right;
            transition: transform 0.3s ease-out;
        }
        &:hover {
            &:after {
                transform: scaleX(1);
                transform-origin: bottom left;
            }
        }
        &.active {
            &:after {
                transform: scaleX(1);
            }
        }
    }
`;

export const GetQuote = styled.div`
    flex: 20%;
    text-align: center;
    button {
        background-color: ${(props) => props.theme.colors.light};
        color: ${(props) => props.theme.colors.black};
        padding: 8px 15px;
        border-radius: 15px;
    }
    ${(props) => props.theme.breakPoint.mobileAndTablet} {
        display: none;
    }
`;