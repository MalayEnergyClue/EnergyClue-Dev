import styled from '@emotion/styled';

export const Wrapper = styled.div`
    width: 100%;
    background-color: ${(props) => props.theme.colors.light};
    color: black;
    min-height: 100vh;
    margin-top: 150px;
`;

export const Container = styled.div`
    max-width: 1350px;
    margin: auto;
    width: 100%;
`;

export const FormHeading = styled.h1`
    font-size: 42px;
    text-align: center;
`;

export const ContactForm = styled.form`
    width: 80%;
    margin: auto;
    margin-top: 50px;
    ${(props) => props.theme.breakPoint.mobile} {
        width: 100%;
        padding: 16px;
        margin-top: 0px;
    }
`;

export const Flex = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 16px;
    ${(props) => props.theme.breakPoint.mobile} {
        margin-bottom: 10px;
        flex-wrap: wrap;
    }
    ${(props) => props.theme.breakPoint.smMobile} {
        margin-bottom: 0px;
    }
`;

export const InputField = styled.div`
    &.w-50 {
        width: calc(50% - 8px);
        ${(props) => props.theme.breakPoint.mobile} {
            width: 100%;
            margin: 8px 0;
        }
    }
    &.textarea-container {
        ${(props) => props.theme.breakPoint.mobile} {
            margin-top: 8px;
        }
    }
`;

export const InputError = styled.div`
    width: calc(50% - 8px);
    color: ${(props) => props.theme.colors.black};
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

export const Input = styled.input`
    width: 100%;
    padding: 12px 16px;
    border: 1px solid ${(props) => props.theme.colors.shadow}75;
    outline: none;
    border-radius: 8px;
    font-size: 16px;
    box-shadow: 0px 4px 5px 1px ${(props) => props.theme.colors.shadow}75;
    min-height: 45px;
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
`;

export const Textarea = styled.textarea`
    width: 100%;
    padding: 12px 16px;
    border: 1px solid ${(props) => props.theme.colors.shadow}75;
    outline: none;
    border-radius: 12px;
    font-size: 16px;
    resize: none;
    font-weight: 500;
    box-shadow: 0px 4px 5px 1px ${(props) => props.theme.colors.shadow}75;
    &:focus {
        box-shadow: -2px -4px 5px 0px ${(props) => props.theme.colors.shadow}75;
    }
`;

export const ButtonContainer = styled.div`
    font-size: 16px;
    margin-top: 16px;
`;

export const Row = styled.div`
    width: 100%;
    display: flex;
    margin-top: 80px;
    margin-bottom: 16px;
    padding: 0px 16px;
    ${(props) => props.theme.breakPoint.mobileAndTablet} {
        flex-wrap: wrap;
        margin-bottom: 50px;
    }
`;

export const MapContainer = styled.div`
    max-width: 50%;
    width: 100%;
    iframe {
        width: 100%;
        height: 400px;
    }
    ${(props) => props.theme.breakPoint.mobileAndTablet} {
        max-width: 100%;
    }
`;

export const ContactInfo = styled.div`
    max-width: 50%;
    width: 100%;
    padding: 0 16px;
    ${(props) => props.theme.breakPoint.mobileAndTablet} {
        max-width: 100%;
    }
`;

export const ContactDetails = styled.div`
`;

export const HeadingText = styled.div`
    border-bottom: 2px solid ${(props) => props.theme.colors.black};
    ${(props) => props.theme.breakPoint.mobile} {
        margin-top: 16px;
    }
    &.contact {
        margin-top: 20px;
    }
`;

export const TextIcon = styled.div`
    display: flex;
    align-items: center;
`;

export const InfoLabel = styled.p`
    line-height: 24px;
`;

export const InfoText = styled.span`
    font-size: 16px;
    line-height: 24px;
    a {
        text-decoration: none;
        color: inherit;
        line-height: inherit;
        transition: all 0.3s;
        &:hover {
            text-decoration: underline;
        }
    }
    ${(props) => props.theme.breakPoint.mobile} {
        width: 100%;
    }
`;

export const InfoFlex = styled.div`
    display: flex;
    margin: 8px 0;
    flex-wrap: wrap;
`;

export const SocialContact = styled.div``;

export const SocialHeading = styled.h2``;

export const SocialIconContainer = styled.div`
    display: flex;
`;

export const IconBox = styled.button`
    width: 32px;
    height: 32px;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: #000;
    border-radius: 100%;
    cursor: pointer;
    outline: none;
    border: none;
    position: relative;
    transition: all 0.3s;
    margin: 0px 8px;
    &:after {
        content: '';
        position: absolute;
        width: 0%;
        height: 100%;
        bottom: 0%;
        border-radius: 100%;
        transform: rotateX(70deg);
        filter: blur(6px);
        transition: all 0.3s;
    }
    &:hover:after {
        bottom: -100%;
        background-color: black;
        width: 100%;
        height: 100%;
    }
`;