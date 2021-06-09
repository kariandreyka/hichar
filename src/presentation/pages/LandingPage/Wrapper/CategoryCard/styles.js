import styled from 'styled-components';
import { Row, Col } from 'antd';

export const Container = styled(Col)`
    margin-bottom: ${({ sm }) => (sm ? '10px' : '0')};
    width: ${({ xl, sm, md }) => {
        if (xl) {
            return '15.7%';
        }
        if (md) {
            return '19%';
        }
        if (sm) {
            return '48%';
        }
    }};
`;

export const Section = styled(Col)`
    border-radius: 0.5rem;
    height: 8rem;
    width: 100%;
    color: rgb(255, 255, 255);
    overflow: hidden;
`;

export const Image = styled.img`
    width: 100%;
    height: 100%;
`;

export const Title = styled.span`
    position: absolute;
    top: 13%;
    left: 8%;
`;
