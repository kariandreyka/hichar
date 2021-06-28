import React, { useState } from 'react';
import { LandingPageStyles } from './styles';
import '../../../assets/landingPage/landing.css';
import WrapperContent from './Wrapper/Wrapper';

const LandingPage = () => {
    const [state, setstate] = useState(0);

    return (
        <LandingPageStyles>
            <WrapperContent />
        </LandingPageStyles>
    );
};

export default LandingPage;
