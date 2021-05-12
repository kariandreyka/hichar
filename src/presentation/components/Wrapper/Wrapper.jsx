import React from 'react';
import { Container } from './styles';
import Banner from './Banner/index';
import CardRow from './CardRow/index';
import CategoryRow from './CategoryRow/index';
import { celebrityData, categories, articles, celebrityData2, articles2, celebrityData3, celebrityData4 } from '../../../utils/Data/useReq';
import Articles from './Articles/index';
import useMediaQuery from '../../../utils/Hooks/userMediaQuery';

const LandingWrapper = () => {
    const { sm } = useMediaQuery();

    return (
        <Container sm={sm}>
            <Banner />
            <CardRow set="Featured" data={celebrityData} />
            <CategoryRow set="Categories" data={categories} />
            <Articles data={articles} />
            <CardRow set="New and noteworthy" data={celebrityData2} />
            <Articles data={articles2} />
            <CardRow set="Actors" data={celebrityData3} />
            <CardRow set="Athletes" data={celebrityData4} />
        </Container>
    );
};

export default LandingWrapper;
