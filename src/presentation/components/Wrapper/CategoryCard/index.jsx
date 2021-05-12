import React from 'react';
import { faSmog } from '@fortawesome/free-solid-svg-icons';
import { Container, Section, Image, Title } from './styles';
import useMediaQuery from '../../../../utils/Hooks/userMediaQuery';

const CatCard = (props) => {
    const { sm } = useMediaQuery();
    const { data } = props;

    return (
        <Container sm={sm}>
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
