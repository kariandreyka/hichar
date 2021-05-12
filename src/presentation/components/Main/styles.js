import styled from 'styled-components';
import { Row } from 'antd';
import { between } from 'polished';

export const Container = styled(Row)`
    max-width: ${between('370px', '290px')};
    min-height: 15rem;
    border-radius: 10px;
    background: rgb(28 28 28);
    padding: 25px;
    position: relative;
    top: 50px;
    margin: auto;
`;

export const Main = styled.main`
    min-height: ${({ md }) => (md ? '120vh' : '100vh')};
    margin-bottom: ${({ sm }) => (sm ? '0' : '20px')};
`;
