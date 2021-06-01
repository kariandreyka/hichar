import React from 'react';
import { Row } from 'antd';
import { Container, Section } from './styles';
import PersonCard from '../PersonCard/index';
import useMediaQuery from '../../../../../utils/Hooks/userMediaQuery';

const CardRow = (props) => {
    const { sm, xl, lg, md, xs } = useMediaQuery();
    const { set, data } = props;

    const cartItem = data.slice(0, 5);
    return (
        <Container>
            <Row>
                <a href="#">
                    <h1 style={{ color: 'white', fontWeight: '800', fontSize: '1.55rem', letterSpacing: '.8px' }}>{set}</h1>
                </a>
            </Row>
            <Section sm={sm} lg={lg} xl={xl}>
                {xl && data.map((param) => <PersonCard data={param} />)}
                {!xl && cartItem.map((param) => <PersonCard data={param} />)}
            </Section>
        </Container>
    );
};

export default CardRow;
