import styled from 'styled-components';
import { Row, Col, Layout } from 'antd';

const { Footer } = Layout;

export const Container = styled(Row)`
    justify-content: space-between;
`;

export const FooterSection = styled(Footer)`
    background-color: rgb(28, 28, 28);
    padding: ${({ sm }) => (sm ? '30px 20px' : '35px 45px;')};
    margin-bottom: 2rem;
    transform: translateY(-13px);
`;

export const Section = styled(Col)`
    padding-bottom: 1rem;
`;
