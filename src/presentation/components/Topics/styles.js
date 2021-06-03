import styled from 'styled-components';
import { Row, Col } from 'antd';

export const TopicBar = styled.a`
    font-family: 'cerebri', 'sans-serif';
    font-size: 1rem;
    font-weight: 400;
    line-height: 0.4rem;
    -webkit-box-align: center;
    align-items: center;
    background-color: rgb(37, 37, 37);
    border-radius: 8rem;
    border: 0px;
    color: rgb(243, 244, 254);
    display: flex;
    -webkit-box-pack: center;
    justify-content: center;
    padding: 0rem 0.9rem;
    text-align: center;
    text-decoration: none;
    transition: background-color 216ms ease-in-out 0s;
    white-space: nowrap;
    pointer-events: inherit;
    margin-right: 1rem;
    margin-bottom: ${({ sm }) => (sm ? '0.4rem' : '0rem')};
    height: 2.6rem;
    &:hover {
        color: rgb(243, 244, 254);
        background-color: rgb(62, 62, 62);
        transition: background-color 216ms ease-in-out 0s;
    }
`;

export const Container = styled(Row)`
    justify-content: ${({ sm }) => (sm ? 'space-between' : 'unset')};
`;

export const Span = styled.span`
    font-family: cerebri, sans-serif;
    font-size: 13px;
    font-weight: 400;
    letter-spacing: -0.01rem;
    line-height: 0.5rem;
    color: rgb(173, 174, 181);
    padding-left: 0.5rem;
`;

export const Brace = styled.span`
    background: rgb(62, 62, 62);
    border-radius: 8rem;
    min-width: 0.3px;
    height: 1.2rem;
    margin-right: 0.8rem;
    margin-top: 0.5rem;
`;
