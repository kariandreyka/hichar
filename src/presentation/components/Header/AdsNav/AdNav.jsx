import React from 'react';
import { Col } from 'antd';
import { Link, Container, Column } from './styles';
import { ChevronRight } from '../../fonts/FontAwesome';

const AdNav = () => (
    <Container>
        <Column sm={24}>
            <Link>
                <Column>A gift for mom that can’t go wrong. Send her a Cameo gift card.</Column>
                <Col style={{ color: 'white' }}>
                    <ChevronRight />
                </Col>
            </Link>
        </Column>
    </Container>
);

export default AdNav;
