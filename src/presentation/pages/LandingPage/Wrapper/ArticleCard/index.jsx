import React from 'react';
import { Container, Image } from './styles';
import useMediaQuery from '../../../../../utils/Hooks/userMediaQuery';
import { Text, Tittle } from '../../../../components/Typography/styles';

const ArticleCard = (props) => {
    const { data } = props;
    const { sm } = useMediaQuery();
    return (
        <Container sm={sm}>
            <a href="">
                <Image src={data.imgSource} alt="" />
            </a>
            <a href="">
                <Tittle size="title" weight="bold" family="secondary">
                    {data.articleName}
                </Tittle>
            </a>
            <div>
                <Text family="secondary">{data.articleAbstract}</Text>
            </div>
        </Container>
    );
};

export default ArticleCard;
