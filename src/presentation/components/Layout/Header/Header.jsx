import React, { useState } from 'react';
import { useHistory, useLocation } from 'react-router-dom';
import Navbar from './Nav/Navbar';
import Topic from './topicCarousel/Topic';
import { Container } from './styles';
import useMediaQuery from '../../../../utils/Hooks/userMediaQuery';

const Header = () => {
    const location = useLocation();
    const locatPage = location.pathname;

    const isPageLanding = () => {
        if (locatPage === '/login') {
            return false;
        }
        return true;
    };
    const { sm } = useMediaQuery();

    return (
        <Container>
            <Navbar />
            {!sm && isPageLanding() && <Topic />}
        </Container>
    );
};

export default Header;
