import styled from 'styled-components';
import { Row, Col } from 'antd';

export const Container = styled(Row)`
    background-color: rgb(37 37 37);
    background-repeat: no-repeat;
    border-radius: 6px;
    justify-content: center;
    margin-bottom: 30px;
    overflow: hidden;
    position: relative;
`;

export const Text = styled.p`
    position: absolute;
    color: #fff;
    top: 30%;
    font-size: 40px;
    font-size: 40px;
    max-width: 620px;
    text-align: center;
    font-weight: 700;
`;

export const Video = styled.video`
    display: ${({ lg }) => (lg ? 'none' : 'flex')};
    max-height: 425px;
    @media (max-width: 1200px) {
        max-height: 295px;
    }
    @media (max-width: 767px) {
        height: 100%;
    }
`;
