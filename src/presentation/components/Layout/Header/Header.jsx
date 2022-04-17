import React from 'react';
import { useLocation } from 'react-router-dom';
import Navbar from './Nav/Navbar';
import Topic from './topicCarousel/Topic';
import { Container } from './styles';
import useMediaQuery from '../../../../utils/Hooks/userMediaQuery';

const Header = (props) => {
    const { userInfo } = props;
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
            <Navbar userInfo={userInfo} />
            {!sm && isPageLanding() && <Topic />}
        </Container>
    );
};

export default Header;
