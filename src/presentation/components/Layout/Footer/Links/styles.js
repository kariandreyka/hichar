import styled from 'styled-components';
import { Row } from 'antd';

export const Container = styled(Row)`
    display: flex;
    -webkit-box-pack: start;
    justify-content: flex-start;
    -webkit-box-align: center;
    align-items: center;
    flex-wrap: wrap;
    padding: ${({ sm }) => (sm ? '2rem 0rem 0px 0px' : '4.3rem 2rem 0px 10px;')};
`;

export const Link = styled.a`
    margin: 0px 0.6rem 0.55rem 0px;
    color: #fff;
`;
