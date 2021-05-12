import React, { useState } from 'react';
import { LandingPageStyles } from './styles';
import '../../../assets/landingPage/landing.css';
import Header from '../../components/Header/Header';
import WrapperContent from '../../components/Wrapper/Wrapper';
import Footer from '../../components/Footer/index';

const LandingPage = () => {
    const [state, setstate] = useState(0);

    return (
        <LandingPageStyles>
            <Header />
            <WrapperContent />
            <Footer />
        </LandingPageStyles>
    );
};

export default LandingPage;
