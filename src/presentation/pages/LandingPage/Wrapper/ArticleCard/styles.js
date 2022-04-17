import styled from 'styled-components';
import { Col } from 'antd';

export const Container = styled(Col)`
    display: flex;
    flex-direction: column;
    width: ${({ sm }) => (sm ? '100%' : '32%')};
    margin-bottom: 3%;
`;

export const Image = styled.img`
    width: 100%;
    margin-bottom: 1rem;
    border-radius: 0.4rem;
`;
