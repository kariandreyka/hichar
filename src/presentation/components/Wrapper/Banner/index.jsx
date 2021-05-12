import React from 'react';
import { Container, Text, Video } from './styles';
import useMediaQuery from '../../../../utils/Hooks/userMediaQuery';

const URL = 'https://cdn.cameo.com/miscellaneous/videos/useCaseOverlayWebApple.m4v';

const Banner = () => {
    const { sm } = useMediaQuery();
    return (
        <Container>
            <Video sm={sm} autoPlay loop playsInline>
                <track kind="captions" />
                <source src={URL} />
            </Video>
            <Text>Personalized videos feat. your favorite stars</Text>
        </Container>
    );
};

export default Banner;
