import styled from 'styled-components';
import { Row, Col } from 'antd';

export const Container = styled(Row)`
    width: ${({ sm }) => (sm ? '100%' : '50%')};
`;

export const Column = styled(Col)``;

export const Link = styled.a`
    color: #fff;
    padding: 0.5rem;
`;
