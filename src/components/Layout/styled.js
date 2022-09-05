import styled from '@emotion/styled';

export const LayoutContainer = styled.div`
    overflow-y: ${({ hamburgerOn }) => hamburgerOn ? 'hidden' : 'scroll'};
    transition: all 0.3s;
    position: relative;
    height: 100vh;
    
    button[disabled] {
        cursor: not-allowed !important;
        ${(props) => props.theme.breakPoint.mobile} {
            opacity: 0.5;
            &:hover {
                background-color: ${(props) => props.theme.colors.light};
                border: none;
                color: ${(props) => props.theme.colors.black};
            }
        }
    }
`;

export const Content = styled.div`
    margin-top: -119px;
    min-height: 100vh;
    display: flex;
    align-items: center;
    ${(props) => props.theme.breakPoint.mobileAndTablet} {
        min-height: auto;
    }
`;