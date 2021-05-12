import styled from 'styled-components';
import { Row, Col, Layout, Menu } from 'antd';

const { Header } = Layout;

export const Column = styled(Col)`
    height: fit-content;
    display: flex;
    justify-content: center;
    padding: 0.15rem 0.5rem;
    align-items: center;
    font-size: 13px;
    font-weight: normal;
    font-family: 'cerebri', 'sans-serif';

    @media (max-width: 768px) {
        font-size: 15px;
    }
`;

export const NAvDiv = styled.div`
    width: 50%;
`;

export const Nav = styled(Header)`
    background-color: black;
    padding: 0 18px;
    line-height: 44px;
    display: flex;
    width: 100%;
`;

export const Container = styled(Row)`
    width: 100%;
    height: fit-content;
    display: flex;
    justify-content: center;
    background-color: rgb(37, 37, 37);
`;

export const Link = styled.a`
    display: flex;
    max-width: 90%;
    color: rgb(69, 255, 255);
    align-items: center;
    &:hover {
        color: rgb(69, 255, 255);
    }
    @media (max-width: 768px) {
        align-items: baseline;
    }
`;
