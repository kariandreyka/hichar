import styled from 'styled-components';
import { Row, Col, Layout, Modal } from 'antd';

const { Header } = Layout;

export const LoginModal = styled(Modal)`
    background-color: rgb(28 28 28) !important;
    width: 373px;
    height: 650px;
`;

export const Column = styled(Col)`
    display: flex;
    justify-content: flex-end;
    align-items: center;
`;

export const Link = styled.a`
    color: #fff;
    &:hover {
        opacity: 0.8;
        color: #fff;
    }
    font-size: 13px;
    padding: 0 0.4rem 0 0;
    @media (max-width: 767px) {
        font-size: 15px;
    }
`;

export const Image = styled.a`
    &:hover {
        opacity: 0.8;
    }
`;

export const Nav = styled(Header)`
    background-color: rgb(16, 16, 16);
    padding: 5px 10px;
    line-height: 44px;
    display: flex;
    width: 100%;
    height: max-content;
    @media (max-width: 767px) {
        padding: 0 10px;
    }
`;

export const Container = styled(Row)`
    width: 100%;
    height: max-content;
`;
