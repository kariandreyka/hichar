import styled from 'styled-components';
import { Row, Col } from 'antd';

export const Container = styled(Row)`
    max-width: 100%;
    height: max-content;
    padding: ${({ sm }) => (sm ? '8px 20px 35px 20px;' : '10px 44px 48px 44px')};
`;
