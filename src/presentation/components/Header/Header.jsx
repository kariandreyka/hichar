import React from 'react';
import { Row } from 'antd';
import AdNav from './AdsNav/AdNav';
import Navbar from './Nav/Navbar';
import Topic from './topicCarousel/Topic';

const Header = () => (
    <Row>
        <AdNav />
        <Navbar />
        <Topic />
    </Row>
);

export default Header;
