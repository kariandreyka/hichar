import React from 'react';
import { Container, FooterSection, Section } from './styles';
import EmailForm from './EmailSubs/Email';
import { footerLinks } from '../../../../utils/Data/useReq';
import PageLinks from './Links/index';
import SocialMediaBar from './SocialMedia/index';
import SubscriptionOffers from './Subsciriptions/index';
import Copyright from './Copyright/index';
import useMediaQuery from '../../../../utils/Hooks/userMediaQuery';

const Footer = () => {
    const { sm } = useMediaQuery();

    return (
        <FooterSection sm={sm}>
            <Container>
                <Section sm={11} xs={12}>
                    <EmailForm />
                    <PageLinks data={footerLinks} />
                </Section>
                <Section style={{ paddingTop: '1rem' }} sm={8} xs={10}>
                    <SocialMediaBar />
                    <SubscriptionOffers />
                    <Copyright />
                </Section>
            </Container>
        </FooterSection>
    );
};
export default Footer;
