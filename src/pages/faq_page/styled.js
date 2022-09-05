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
`;

export const Headings = styled.div`
    margin-bottom: 16px;
    .sub-heading {
        margin-top: 16px;
        padding: 0 20%;
        ${(props) => props.theme.breakPoint.mobile} {
            padding: 0 10%;
        }
        ${(props) => props.theme.breakPoint.smMobile} {
            padding: 0;
        }
    }
`;

export const Section = styled.section`
    padding: 16px 0;
    margin: 20px 0;
    ${(props) => props.theme.breakPoint.mobile} {
        margin: 10px 0;
        padding: 0;
        .faq-heading {
            margin-bottom: 5px;
        }
    }
`;

export const FAQBody = styled.div`
`;

export const FAQ = styled.div`
    margin: 16px 0;
    ${(props) => props.theme.breakPoint.mobile} {
        margin: 0px 0 16px 0;
    }
    .que {
        font-size: 18px;
        margin-bottom: 3px;
        ${(props) => props.theme.breakPoint.mobile} {
            font-size: 16px;
            margin-bottom: 0px;
        }
    }
    .ans {
        margin: 3px 0;
        span {
            margin: 0;
            &.bold {
                font-weight: 600;
                white-space: nowrap;
            }
        }
        button {
            &.inline-button {
                border: none;
                outline: none;
                background-color: transparent;
                font-weight: 600;
            }
        }
        a {
            text-decoration: none;
            &.link-text {
                color: inherit;
                border-bottom: 1px solid transparent;
                transition: all 0.3s;
                &:hover {
                    border-bottom: 1px solid ${(props) => props.theme.colors.black};
                }
            }
        }
    }
`;

export const ListItems = styled.ul`
    margin-left: 20px;
`;
export const ListItem = styled.li`
    font-size: 16px;
    font-weight: 400;
    ${(props) => props.theme.breakPoint.mobile} {
        font-size: 14px;
        font-weight: 500;
    }
    &::marker {
        font-size: 24px;
    }
    &.list-dash {
        position: relative;
        list-style-type: none;
        margin: 8px 0;
        line-height: 20px;
        &::before {
            content: '';
            display: block;
            position: absolute;
            width: 10px;
            height: 1.5px;
            left: -20px;
            top: 10px;
            background-color: ${(props) => props.theme.colors.black};
        }
    }
`;