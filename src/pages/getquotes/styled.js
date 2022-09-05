import styled from '@emotion/styled';

export const Wrapper = styled.div`
    width: 100%;
    background-color: ${(props) => props.theme.colors.light};
    color: ${(props) => props.theme.colors.black};
    margin-top: 150px;
`;

export const Container = styled.div`
    max-width: 1350px;
    width: 100%;
    margin: auto;
    padding: 0px 16px;
    .underline {
        text-decoration: underline;
    }
`;

export const Form = styled.form`
    width: 80%;
    margin: auto;
    margin-top: 30px;
    padding-bottom: 100px;
    ${(props) => props.theme.breakPoint.mobileAndTablet} {
        width: 100%;
        padding-bottom: 100px;
    }
    ${(props) => props.theme.breakPoint.mobile} {
        margin-top: 16px;
        padding-bottom: 40px;
    }
`;

export const Flex = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 0px;
    ${(props) => props.theme.breakPoint.mobile} {
        flex-wrap: wrap;
        margin-bottom: 0px;
    }
`;


export const InputError = styled.div`
    width: calc(50% - 8px);
    margin: 5px 0;
    color: ${(props) => props.theme.colors.light};
    p {
        margin-top: 10px;
        font-size: 14px;
        color: ${(props) => props.theme.colors.text.red};
    }
    ${(props) => props.theme.breakPoint.smMobile} {
        width: 100%;
        margin: 8px 0;
    }
`;

export const InputField = styled.div`
    &.w-50 {
        width: 100%;
        ${(props) => props.theme.breakPoint.mobile} {
            width: 100%;
        }
    }
`;

export const SelectField = styled.div`
    &.w-50 {
        width: calc(50% - 8px);
        ${(props) => props.theme.breakPoint.mobile} {
            width: 100%;
            margin: 8px 0;
        }
    }
`;

export const Select = styled.select`
    width: 100%;
    padding: 12px 16px;
    border: 1px solid ${(props) => props.theme.colors.shadow}75;
    outline: none;
    border-radius: 12px;
    font-size: 16px;
    box-shadow: 0px 4px 5px 1px ${(props) => props.theme.colors.shadow}75;
    background-color: ${(props) => props.theme.colors.light};
    &:focus {
        box-shadow: -2px -4px 5px 0px ${(props) => props.theme.colors.shadow}75;
    }
`;

export const Option = styled.option``;

export const Input = styled.input`
    width: 100%;
    padding: 12px 15px;
    border: 1px solid ${(props) => props.theme.colors.shadow}75;
    outline: none;
    font-size: 16px;
    box-shadow: 0px 4px 5px 1px ${(props) => props.theme.colors.shadow}75;
    min-height: 45px;
    border-radius: 8px;
    letter-spacing: 1px;
    font-weight: 500;
    &:focus {
        box-shadow: -2px -4px 5px 0px ${(props) => props.theme.colors.shadow}75;
    }
`;

export const Label = styled.label`
    font-size: 16px;
    line-height: 24px;
    display: block;
    margin-bottom: 3px;
    margin-left: 3px;
    color: ${(props) => props.theme.colors.black};
`;

export const ButtonContainer = styled.div`
    font-size: 16px;
    margin-top: 30px;
    ${(props) => props.theme.breakPoint.mobile} {
        flex-wrap: wrap;
        margin-bottom: 10px;
    }
`;

export const Row = styled.div`
    width: 100%;
    display: flex;
    margin-top: 50px;
`;