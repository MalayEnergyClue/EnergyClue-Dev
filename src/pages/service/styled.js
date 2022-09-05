import styled from '@emotion/styled';

export const Wrapper = styled.div`
    width: 100%;
    height: 100%;
    min-height: 100vh;
`;

export const Row = styled.div`
    width: 100%;
    padding: 40px 0;
    &:nth-of-type(odd) {
        background-color: ${(props) => props.theme.colors.black};
        color: white;
    }
    .flex-reverse {
        flex-direction: row-reverse;
    }
    &.first {
        padding-top: 100px;
        ${(props) => props.theme.breakPoint.mobile} {
            padding-top: 150px;
        }
    }
`;

export const Container = styled.div`
    max-width: 1350px;
    width: 100%;
    margin: auto;
    padding: 100px 16px;
    &.flex {
        display: flex;
        align-items: center;
    }
    &.flex-reverse {
        display: flex;
        align-items: center;
    }
    ${(props) => props.theme.breakPoint.tablet} {
        padding: 50px 16px;
    }
    ${(props) => props.theme.breakPoint.mobile} {
        padding: 20px 16px;
        &.flex {
            flex-wrap: wrap;
        }
        &.flex-reverse {
            flex-wrap: wrap;
        }
    }
`;

export const Content = styled.div`
    max-width: 50%;
    width: 100%;
    padding: 0 16px;
    position: relative;
    ${(props) => props.theme.breakPoint.mobile} {
        max-width: 100%;
        padding: 0;
    }
`;

export const ImgContent = styled.img`
    width: 100%;
    object-fit: cover;
    object-position: center;
    max-height: 500px;
`;

export const TextContent = styled.div`
    button {
        margin-top: 16px;
        a{
            text-decoration: none;
            color: inherit;
            width: 100%;
            height: 100%;
        }
    }
`;

export const ServiceForm = styled.form`
    width: 100%;
    padding-top: 40px;
    ${(props) => props.theme.breakPoint.mobile} {
        padding-top: 20px;
    }
`;

export const FormHeading = styled.h1`
    color: ${(props) => props.theme.colors.light};
    text-align: center;
`;

export const InputGroup = styled.div`
    width: 100%;
    margin-bottom: 16px;
    &.flex {
        display: flex;
        align-items: center;
        justify-content: space-between;
        ${(props) => props.theme.breakPoint.mobile} {
            flex-wrap: wrap;
            margin-bottom: 0;
        }
    }
`;

export const InputLabel = styled.label`
    font-size: 16px;
    line-height: 24px;
    margin-bottom: 3px;
    margin-left: 5px;
    display: block;
    font-weight: 500;
    ${(props) => props.theme.breakPoint.mobile} {
        margin-top: 16px;
    }
`;

export const InputField = styled.input`
    width: 100%;
    padding: 12px 15px;
    border: none;
    outline: none;
    font-size: 16px;
    min-height: 45px;
    border-radius: 8px;
    letter-spacing: 1px;
    font-weight: 500;
    ${(props) => props.theme.breakPoint.mobile} {
        padding: 15px 15px;
    }
`;

export const InputLabelContainer = styled.div`
    width: 100%;
    p {
        margin-top: 10px;
        font-size: 14px;
        color: ${(props) => props.theme.colors.text.red};
        margin-bottom: 6px;
    }
    &.w-50 {
        width: calc(50% - 8px);
        ${(props) => props.theme.breakPoint.mobile} {
            width: 100%;
        }
    }
`;

export const SelectGroup = styled.div`
    width: 100%;
    &.flex {
        display: flex;
        align-items: center;
        justify-content: space-between;
        ${(props) => props.theme.breakPoint.mobile} {
            flex-wrap: wrap;
            margin-bottom: 0;
        }
    }
    &.mt-4 {
        margin-top: 16px;
        ${(props) => props.theme.breakPoint.mobile} {
            margin-top: 0px;
        }
    }
`;

export const SelectLabelContainer = styled.div`
    width: 100%;
    p {
        margin-top: 10px;
        font-size: 14px;
        color: ${(props) => props.theme.colors.text.red};
    }
    &.w-50 {
        width: calc(50% - 8px);
        ${(props) => props.theme.breakPoint.mobile} {
            width: 100%;
        }
    }
`;

export const SelectLabel = styled.label`
    font-size: 16px;
    line-height: 24px;
    margin-bottom: 3px;
    margin-left: 5px;
    display: block;
    font-weight: 500;
    ${(props) => props.theme.breakPoint.mobile} {
        margin-top: 16px;
    }
`;

export const Select = styled.select`
    width: 100%;
    min-width: 100%;
    padding: 12px 15px;
    border-radius: 12px;
    border: none;
    outline: none;
    font-size: 16px;
    letter-spacing: 1px;
    font-weight: 500;
    background-color: ${(props) => props.theme.colors.light};
`;

export const Option = styled.option`
    font-size: 16px;
    line-height: 32px;
`;

export const TextareaLabel = styled.label`
    font-size: 16px;
    line-height: 24px;
    margin-bottom: 3px;
    margin-left: 5px;
    display: block;
    font-weight: 500;
    margin-top: 16px;
`;

export const Textarea = styled.textarea`
    width: 100%;
    padding: 12px 15px;
    border-radius: 12px;
    border: none;
    outline: none;
    resize: none;
    font-size: 16px;
    letter-spacing: 1px;
    font-weight: 500;
`;