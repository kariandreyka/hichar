import React from 'react';
import { Row, Col } from 'antd';
import { Container, Column, Link, Paragraf } from './styles';

const Subscription = () => (
    <Row>
        <Container>
            <Paragraf>Ready to become a talent on Cameo?</Paragraf>
            <Row>
                <Column>
                    <Link>Enroll as Talent</Link>
                </Column>
            </Row>
        </Container>
        <Container>
            <Paragraf>Are you an agent, manager or publicist?</Paragraf>
            <Row>
                <Column>
                    <Link>Register as a Partner</Link>
                </Column>
            </Row>
        </Container>
    </Row>
);

export default Subscription;
