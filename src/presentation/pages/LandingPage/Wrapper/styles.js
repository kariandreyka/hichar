import styled from 'styled-components';
import { Row, Col } from 'antd';
import { between } from 'polished';

export const Container = styled(Row)`
    max-width: 100%;
    height: max-content;
    padding: ${between('10px', '15px')};
    padding-left: ${between('10px', '100px')};
    padding-right: ${between('10px', '100px')};
    background-color: #fff;
`;
