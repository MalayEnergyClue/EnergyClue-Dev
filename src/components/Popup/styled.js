import styled from '@emotion/styled';

export const Wrapper = styled.div`
    position: fixed;
    z-index: 12;
    top: 0;
    left: 0;
    background-color: #00000070;
    width: 100%;
    height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
`;

export const Container = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 16px;
    text-align: center;
`;

export const Modal = styled.div`
    position: relative;
    padding: 16px;
    max-width: 767px;
    width: 100%;
    margin: auto;
    background-color: ${(props) => props.theme.colors.light};
    color: #141414;
    border-radius: 25px;
    box-shadow: 1px 4px 5px ${(props) => props.theme.colors.shadow}75,
                1px -4px 5px ${(props) => props.theme.colors.shadow}75;
`;

export const TextContainer = styled.div`
    margin: 25px 0;
`;

export const CloseBtn = styled.div`
    position: absolute;
    right: 5px;
    top: 15px;
    width: 32px;
    height: 32px;
    border: none;
    background-color: none;
    outline: none;
`;