import styled from '@emotion/styled';

export const HomePage = styled.div`
    overflow-x: hidden;
`;

export const Wrapper = styled.div`
    width: 100%;
    min-height: 700px;
    position: relative;
    z-index: 1;
    height: 100vh;
`;

export const HomeBgImg =styled.div`
    width: 100%;
    min-height: 700px;
    height: 100vh;
    filter: brightness(0.65);
`;

export const HomeSliderImg = styled.img`
    width: 100%;
    min-height: 820px;
    height: 100%;
    object-fit: cover;
    object-position: center;
`;

export const Overlay = styled.div`
    width: 100%;
    height: 100%;
    position: absolute;
    left: 0;
    top: 0;
    z-index: 0;
    background-color: ${(props) => props.theme.colors.black}80;
`;

export const HeadingText = styled.div`
    position: absolute;
    left: 0;
    right: 0;
    top: 160px;
    text-align: center;
    width: 100%;
    ${(props) => props.theme.breakPoint.mobile} {
        top: 150px;
    }
    .subtitle {
        padding: 0px 16px;
    }
`;

export const Container = styled.div`
    max-width: 1350px;
    width: 100%;
    padding: 0px 16px;
    margin: auto;
    position: relative;
    &.service-container {
        padding: 100px 16px 80px 16px;
        ${(props) => props.theme.breakPoint.mobile} {
            padding: 50px 16px 50px 16px;
            .service-para {
                margin-top: 8px;
            }
        }
    }
    ${(props) => props.theme.breakPoint.mobile} {
        padding: 0px;
    }
    &.choose-us-container {
        padding: 80px 16px;
        ${(props) => props.theme.breakPoint.mobile} {
            padding: 50px 16px;
        }
    }
    &.bottom {
        height: auto;
        margin: auto;
        display: flex;
        ${(props) => props.theme.breakPoint.mobile} {
            flex-wrap: wrap;
            flex-direction: column-reverse;
            padding: 0px 16px 50px 16px;
        }
    }
    &.vision-para {
        padding: 80px 16px;
        ${(props) => props.theme.breakPoint.mobile} {
            padding: 16px 16px 60px 16px;
        }
    }
    &.mission-para {
        padding: 80px 16px;
        ${(props) => props.theme.breakPoint.mobile} {
            padding: 16px 16px 50px 16px;
        }
    }
    &.desktop {
        display: block;
        ${(props) => props.theme.breakPoint.mobile} {
            display: none;
        }
    }
`;

export const FlexContainer = styled.div`
    max-width: 1350px;
    width: 100%;
    margin: auto;
    display: flex;
    align-items: space-between;
    flex-wrap: wrap;
    z-index: 1;
    position: absolute;
    bottom: 10%;
    left: 0;
    right: 0;
    ${(props) => props.theme.breakPoint.mobile} {
        bottom: 5%;
    }
`;

export const MenuItems = styled.div`
    width: calc(100% / 3);
    text-align: center;
    &:first-of-type {
        width: 100%;
        margin-bottom: 50px;
        ${(props) => props.theme.breakPoint.xsmMobile} {
            order: 4;
            margin-top: 30px;
            margin-bottom: 0;
        }
    }
    .home-head {
        ${(props) => props.theme.breakPoint.xsmMobile} {
            margin-top: 16px;
            font-size: 26px;
        }
    }
    ${(props) => props.theme.breakPoint.xsmMobile} {
        width: 100%;
    }
`;

export const Section = styled.section`
    width: 100%;
    position: relative;
    &.service {
        background-color: ${(props) => props.theme.colors.black};
        margin-top: 80px;
        z-index: 1;
        position: relative;
        ${(props) => props.theme.breakPoint.mobile} {
            margin-top: 0px;
        }
    }
    &.about {
        padding-bottom: 50px;
        ${(props) => props.theme.breakPoint.mobile} {
            display: flex;
            flex-direction: column-reverse;
            padding-bottom: 0;
        }
        .bottom {
            padding: 50px 0 0 0;
            .heading-text {
                padding: 0px 50px;
                ${(props) => props.theme.breakPoint.mobile} {
                    padding: 0;
                }
            }
        }
    }
    &.mission {
        background-color: ${(props) => props.theme.colors.black};
    }
    &.partners {
        padding: 80px 16px;
        .partners-slider {
            margin-top: 60px;
        }
        ${(props) => props.theme.breakPoint.mobile} {
            padding: 30px 16px;
            .partners-slider {
                margin-top: 40px;
            }
        }
    }
    &.testimonials {
        padding: 80px 16px;
        .testimonial-slider {
            width: 70%;
            margin: auto;
            border-radius: 15px;
            box-shadow: 1px 4px 5px ${(props) => props.theme.colors.shadow}75,
                        1px -4px 5px ${(props) => props.theme.colors.shadow}75;
            margin-top: 30px;
            margin-bottom: 25px;
            ${(props) => props.theme.breakPoint.mobileAndTablet} {
                width: 90%;
                margin-top: 30px;
            }
            ${(props) => props.theme.breakPoint.mobile} {
                width: 100%;
            }
        }
        ${(props) => props.theme.breakPoint.mobile} {
            padding: 30px 16px;
            margin-bottom: 30px;
        }
    }
    &.contact {
        background-color: ${(props) => props.theme.colors.black};
        padding: 100px 0;
        min-height: auto;
        ${(props) => props.theme.breakPoint.mobileAndTablet} {
            padding: 80px 0;
        }
        ${(props) => props.theme.breakPoint.mobile} {
            padding: 30px 0;
        }
    }
    &.choose-us {
        min-height: auto;
        background-color: ${(props) => props.theme.colors.black};
    }
`;

export const Row = styled.div`
    display: flex;
    &.upper {
        height: 100%;
        ${(props) => props.theme.breakPoint.mobile} {
            flex-direction: column-reverse;
        }
        .button {
            ${(props) => props.theme.breakPoint.mobile} {
                width: 40%;
                display: inline-block;
            }
            ${(props) => props.theme.breakPoint.smMobile} {
                width: 100%;
                display: flex;
                justify-content: center;
            }
        }
    }
    &.reverse {
        flex-direction: row-reverse;
        ${(props) => props.theme.breakPoint.mobile} {
            flex-direction: column-reverse;
        }
    }
`;

export const LargeContainer = styled.div`
    width: 100%;
    &.about-banner {
        height: 70vh;
        min-height: 600px;
    }
    &.vision-banner {
        height: 70vh;
        min-height: 600px;
    }
    &.mission-banner {
        height: 70vh;
        min-height: 600px;
    }
    &.paratext {
        padding: 0 70px 0 16px;
        ${(props) => props.theme.breakPoint.mobileAndTablet} {
            padding: 0 30px 0 16px;
        }
        ${(props) => props.theme.breakPoint.mobile} {
            padding: 16px 16px 50px 16px;
        }
    }
`;

export const ImgContainer = styled.div`
    width: 100%;
    &.about-banner {
        height: 80vh;
        min-height: 600px;
    }
`;

export const Img = styled.img`
    width: 100%;
    height: 100%;
    object-fit: cover;
    object-position: bottom;
`;

export const SmallContainer = styled.div`
    position: relative;
    min-width: fit-content;
    &.absText {
        display: flex;
        justify-content: center;
        align-items: center;
    }
    &.heading-text {
        padding: 50px 50px 50px 50px;
        ${(props) => props.theme.breakPoint.mobileAndTablet} {
            padding: 80px 50px 50px 50px;
        }
        ${(props) => props.theme.breakPoint.mobile} {
            padding: 50px 16px 30px 16px;
            text-align: center;
        }
    }
    &.flex-column {
        display: flex;
        flex-direction: column;
    }
    &.justify-between {
        justify-content: space-between;
    }
`;

export const Headings = styled.div``;

export const Buttons = styled.div``;

export const ButtonContainer = styled.div`
    margin-top: 30px;
    &.button {
        margin-top: 16px;
    }
    ${(props) => props.theme.breakPoint.mobile} {
        margin-top: 16px;
    }
    ${(props) => props.theme.breakPoint.smMobile} {
        margin-top: 10px;
    }
`;

export const AbsHeadText = styled.div`
    font-size: 108px;
    letter-spacing: 10px;
    text-transform: uppercase;
    font-weight: 700;
    line-height: 120px;
    &.about {
        overflow: hidden;
        transform: rotate(90deg);
        color: ${(props) => props.theme.colors.text.lightGray};
    }
    &.service-abstext-up {
        position: absolute;
        top: -58px;
        z-index: 3;
        height: 58px;
        color: ${(props) => props.theme.colors.text.light};
    }
    &.service-abstext-down {
        position: absolute;
        top: -58px;
        z-index: 3;
        height: 58px;
        overflow: hidden;
        color: ${(props) => props.theme.colors.text.black};
    }
    ${(props) => props.theme.breakPoint.mobileAndTablet} {
        font-size: 88px;
        letter-spacing: 7px;
        line-height: 88px;
        &.service-abstext-up {
            top: -44px;
            height: 44px;
        }
        &.service-abstext-down {
            top: -44px;
            height: 44px;
        }
    }
`;

export const CardContainer = styled.div`
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    margin-top: 50px;
    ${(props) => props.theme.breakPoint.smMobile} {
        margin-top: 25px;
    }
`;

export const Card = styled.div`
    padding: 16px;
    width: calc(50% - 16px);
    border-radius: 15px;
    transition: all 0.3s ease-out;
    transform: scale(1);
    display: flex;
    margin: 16px 0;
    div {
        color: ${(props) => props.theme.colors.light};
        transition: all 0.3s ease-out;
    }
    &:hover {
        transform: scale(1.05);
        box-shadow: 1px 4px 5px ${(props) => props.theme.colors.shadow}75,
                    1px -4px 5px ${(props) => props.theme.colors.shadow}75;
    }
    ${(props) => props.theme.breakPoint.mobileAndTablet} {
        flex-direction: column;
        width: calc(50% - 10px);
        box-shadow: 1px 4px 5px ${(props) => props.theme.colors.shadow}75,
                    1px -4px 5px ${(props) => props.theme.colors.shadow}75;
        &:hover {
            transform: scale(1);
        }
    }
    ${(props) => props.theme.breakPoint.tablet} {
        width: calc(50% - 10px);
        margin-top: 24px;
    }
    ${(props) => props.theme.breakPoint.mobile} {
        width: 100%;
        margin: 16px 0;
    }
`;

export const CardImg = styled.img`
    width: 100%;
    max-width: 200px;
    max-height: 180px;
    border-radius: 10px;
    object-fit: cover;
    ${(props) => props.theme.breakPoint.mobileAndTablet} {
        max-width: 100%;
        height: 400px;
        max-height: none;
        margin-bottom: 16px;
    }
`;

export const CardText = styled.div`
    padding: 0px 16px;
    ${(props) => props.theme.breakPoint.mobile} {
        padding: 16px 0px 0 0;
    }
`;

export const PartnersCard = styled.div`
    cursor: grab;
    outline: none;
    display: flex !important;
    align-items: center;
    justify-content: center;
    height: 200px;
`;

export const PartnersImg = styled.img`
    width: 60%;
    margin: auto;
    ${(props) => props.theme.breakPoint.mobile} {
        max-height: 200px;
        object-fit: contain;
    }
`;

export const TestimonialCard = styled.div`
    width: 100%;
    margin-top: 0px;
    padding: 16px;
    cursor: grab;
    outline: none;
    div {
        margin: 15px 0;
    }
    ${(props) => props.theme.breakPoint.mobile} {
        padding: 16px 12px;
    }
    .slick-dots {
        bottom: -45px;
    }
`;

export const WhyUsCardContainer = styled.div`
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    margin-top: 40px;
`;

export const WhyUsCard = styled.div`
    width: calc(50% - 16px);
    padding: 15px;
    border-radius: 15px;
    transition: all 0.3s ease-out;
    margin: 15px 0;
    transform: scale(1);
    cursor: default;
    &:hover {
        box-shadow: 1px 4px 5px ${(props) => props.theme.colors.shadow}75,
                    1px -4px 5px ${(props) => props.theme.colors.shadow}75;
        transform: scale(1.05);
    }
    ${(props) => props.theme.breakPoint.mobileAndTablet} {
        width: calc(50% - 10px);
        box-shadow: 1px 4px 5px ${(props) => props.theme.colors.shadow}75,
                    1px -4px 5px ${(props) => props.theme.colors.shadow}75; 
        &:hover {
            transform: scale(1);
        }
    }
    ${(props) => props.theme.breakPoint.tablet} {
        width: calc(50% - 10px);
        margin-top: 24px;
    }
    ${(props) => props.theme.breakPoint.mobile} {
        width: 100%;
        margin: 16px 0;
    }
`;

export const WhyUsIcon = styled.div`
    text-align: center;
    color: ${(props) => props.theme.colors.light};
    font-size: 108px;
    line-height: 1.2;

    svg {
        fill: ${(props) => props.theme.colors.light};
        
        polygon {
            stroke: ${(props) => props.theme.colors.light};
        }
    }

    ${(props) => props.theme.breakPoint.mobileAndTablet} {
        font-size: 88px;
    }
`;

export const ContactForm = styled.form`
    width: 70%;
    margin: auto;
    margin-top: 40px;
    ${(props) => props.theme.breakPoint.mobileAndTablet} {
        width: 80%;
    }
    ${(props) => props.theme.breakPoint.mobile} {
        width: 100%;
        padding: 0px 16px;
        margin-top: 10px;
    }
`;

export const InputContainer = styled.div`
    width: 100%;
    display: flex;
    justify-content: space-between;
    margin-top: 12px;
    ${(props) => props.theme.breakPoint.smMobile} {
        flex-wrap: wrap;
        margin-top: 0px;
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

export const Input = styled.input`
    width: 100%;
    padding: 12px 15px;
    border-radius: 8px;
    outline: none;
    border: none;
    font-size: 16px;
    letter-spacing: 1px;
    font-weight: 500;
    min-height: 45px;
    ${(props) => props.theme.breakPoint.mobile} {
        padding: 15px 15px;
    }
`;

export const Textarea = styled.textarea`
    width: 100%;
    padding: 15px;
    margin: 14px 0;
    border-radius: 8px;
    outline: none;
    border: none;
    resize: none;
    font-size: 16px;
    letter-spacing: 1px;
    font-weight: 500;
    ${(props) => props.theme.breakPoint.smMobile} {
        margin: 8px 0;
    }
`;
