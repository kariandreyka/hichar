import styled from 'styled-components';
import { Row, Col } from 'antd';

export const Container = styled(Row)`
    margin-bottom: 12px;
`;

export const Column = styled(Col)``;

export const Link = styled.a`
    display: inline-block;
    appearance: none;
    border: 1px solid rgb(243, 244, 254);
    transition: border-color 216ms ease-in-out 0s, background-color 216ms ease-in-out 0s;
    width: inherit;
    position: relative;
    outline: none;
    text-decoration: none;
    background-color: rgb(0 0 0 / 0%);
    color: rgb(255, 255, 255);
    font-size: 0.84rem;
    font-weight: 400;
    letter-spacing: -0.01rem;
    line-height: 1.5rem;
    padding: 0.35rem 0.8rem;
    border-radius: 0.35rem;
    &:hover {
        color: #fff;
        border-color: rgb(173, 174, 181);
    }
`;

export const Paragraf = styled.p`
    width: 100%;
    color: #fff;
    padding-top: 5px;
    margin-bottom: 5px;
    font-size: 12px;
`;
