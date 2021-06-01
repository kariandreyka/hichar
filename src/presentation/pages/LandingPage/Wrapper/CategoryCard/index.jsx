import React from 'react';
import { Container, Section, Image, Title } from './styles';
import useMediaQuery from '../../../../../utils/Hooks/userMediaQuery';

const CatCard = (props) => {
    const { sm, xl, md } = useMediaQuery();
    const { data } = props;

    return (
        <Container sm={sm} xl={xl} md={md}>
            <Section sm={sm}>
                <a href="#">
                    <Image src={data.imgSource} alt="" />
                    <Title>{data.categoryName}</Title>
                </a>
            </Section>
        </Container>
    );
};

export default CatCard;
