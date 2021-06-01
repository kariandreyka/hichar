import React from 'react';
import { Row } from 'antd';
import { Container, Section } from './styles';
import CategoryCard from '../CategoryCard/index';
import useMediaQuery from '../../../../../utils/Hooks/userMediaQuery';

const CategoryRow = (props) => {
    const { set, data } = props;
    const { sm, xl, lg, md, xs } = useMediaQuery();

    const cartItem = data.slice(0, 5);

    return (
        <Container>
            <a href="#">
                <h1 style={{ color: 'white', fontWeight: '800', fontSize: '1.55rem', letterSpacing: '.8px' }}>{set}</h1>
            </a>
            <Row />
            <Section sm={sm} lg={lg} xl={xl}>
                {xl && data.map((param) => <CategoryCard data={param} />)}
                {(sm || lg || md || xs) && cartItem.map((param) => <CategoryCard data={param} />)}
            </Section>
        </Container>
    );
};

export default CategoryRow;
