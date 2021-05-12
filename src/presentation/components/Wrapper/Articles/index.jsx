import React from 'react';
import { Row, Col } from 'antd';
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
