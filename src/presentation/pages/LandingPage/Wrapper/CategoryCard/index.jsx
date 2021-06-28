import React from 'react';
import Link from 'react-router-dom';
import { Container, Section, Image, Title } from './styles';
import useMediaQuery from '../../../../../utils/Hooks/userMediaQuery';
import { Text } from '../../../../components/Typography/styles';

const CatCard = (props) => {
    const { sm, xl, md } = useMediaQuery();
    const { data } = props;

    return (
        <Container sm={sm} xl={xl} md={md}>
            <Section sm={sm}>
                <Link>
                    <Image src={data.imgSource} alt="" />
                    <Title>
                        <Text weight="bold" family="secondary">
                            {data.categoryName}
                        </Text>
                    </Title>
                </Link>
            </Section>
        </Container>
    );
};

export default CatCard;
