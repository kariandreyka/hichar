import styled, { createGlobalStyle } from 'styled-components';
import { Menu, Dropdown, Button, Row } from 'antd';

export const StyledMenu = styled(Menu)`
    background-color: rgb(37, 37, 37);
    color: white;
    border-radius: 0.6rem;
    .ant-dropdown-menu-item {
        padding: 1rem 1.7rem;
    }
    .ant-dropdown-menu-item:hover {
        background-color: rgb(28, 28, 28);
    }
`;
export const StyledDropdown = styled(Dropdown)``;
export const StyledButton = styled(Button)``;
export const Section = styled(Row)`
    width: max-content;
    height: max-content;
    justify-content: center;
    align-items: center;
`;

export const GlobalStyle = createGlobalStyle`
     .ant-dropdown-trigger {
        border-radius: 90% !important;
        width: 2.5rem;
        height: 2.5rem;
        border: none;
     }
    .rotate .anticon {
        transition: transform 108ms ease-in-out 0s !important;
        transform: rotate(180deg) !important;

     }
     .anticon {
        transition: transform 108ms ease-in-out 0s !important;
        width: 1.5rem;
     }
     .ant-btn-group > .ant-btn:first-child:not(:last-child), .ant-btn-group > span:first-child:not(:last-child) > .ant-btn {
         display: none;
     }
     
`;

export const StyledImg = styled.img`
    width: 100%;
    height: 100%;
    position: absolute;
    left: 0;
    top: 0;
    border-radius: 1.03rem;
`;
