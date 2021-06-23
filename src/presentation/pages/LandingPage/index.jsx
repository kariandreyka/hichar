import React, { useState } from 'react';
import { LandingPageStyles } from './styles';
import '../../../assets/landingPage/landing.css';
import WrapperContent from './Wrapper/Wrapper';

const LandingPage = () => {
    const [state, setstate] = useState(0);

    const handleMyBranch = () => {
        console.log('this is for branch testing');
    }

   const hadnleSomeShit = (params) => {
    console.log('this is for branch testinggg');
        
    }
  
    return (
        <LandingPageStyles>
            <WrapperContent />
        </LandingPageStyles>
    );
};

export default LandingPage;
