import React from 'react';
import { Container } from './styles';
import ArticleCard from '../ArticleCard';

const Articles = (props) => {
    const { data } = props;
    return (
        <Container>
            {data.map((params) => (
                <ArticleCard data={params} />
            ))}
        </Container>
    );
};

export default Articles;
