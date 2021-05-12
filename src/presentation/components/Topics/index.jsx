import React from 'react';
import { TopicBar, Container, Span, Brace } from './styles';
import useMediaQuery from '../../../utils/Hooks/userMediaQuery';

const Topics = (props) => {
    const { sm } = useMediaQuery();
    const { topics } = props;
    return (
        <Container sm={sm}>
            <TopicBar sm={sm} key={12}>
                Home
            </TopicBar>
            <Brace />

            {topics.map((topic, ind) => (
                <TopicBar sm={sm} key={ind}>
                    <div>{topic.topicName}</div>
                    <Span>{topic.topicCount}</Span>
                </TopicBar>
            ))}
            <TopicBar sm={sm} key={33}>
                <div>All Categories</div> <Span>764</Span>
            </TopicBar>
        </Container>
    );
};
export default Topics;
