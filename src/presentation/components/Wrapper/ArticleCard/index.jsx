import React from 'react';
import { Container, Image } from './styles';
import useMediaQuery from '../../../../utils/Hooks/userMediaQuery';

const ArticleCard = (props) => {
    const { data } = props;
    const { sm } = useMediaQuery();
    return (
        <Container sm={sm}>
            <a href="">
                <Image src={data.imgSource} alt="" />
            </a>
            <a href="">
                <h1>{data.articleName}</h1>
            </a>
            <div>
                <span>{data.articleAbstract}</span>
            </div>
        </Container>
    );
};

export default ArticleCard;
