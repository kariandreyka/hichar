import React from 'react';
import { Col } from 'antd';
import { Container } from './styles';
import { Text } from '../../../Typography/styles';

const Copyright = () => (
    <Container>
        <Col>
            <Text color="grey" size="description">
                © 2017-2021, Baron App, Inc. dba Cameo
            </Text>
        </Col>
    </Container>
);

export default Copyright;
