import styled from 'styled-components';
import { Row, Col } from 'antd';

export const Container = styled(Col)`
    margin-bottom: ${({ sm }) => (sm ? '10px' : '0')};
`;

export const Section = styled(Col)`
    border-radius: 0.5rem;
    height: 6.4rem;
    width: 100%;
    color: rgb(255, 255, 255);
    overflow: hidden;
    max-width: ${({ sm }) => (sm ? '10rem' : '11rem')};
`;

export const Image = styled.img`
    width: 100%;
    height: 100%;
`;

export const Title = styled.span`
    position: absolute;
    top: 13%;
    left: 8%;
    color: white;
    font-weight: 700;
    font-size: 13px;
`;
