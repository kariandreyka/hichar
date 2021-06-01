import React from 'react';
import { Container, Column, Link } from './styles';
import { FacebookIcon, InstagramIcon, TwitterIcon, MailIcon, AppleIcon } from '../../../fonts/FontAwesome';
import useMediaQuery from '../../../../../utils/Hooks/userMediaQuery';

const SocialMedia = () => {
    const { sm } = useMediaQuery();

    return (
        <Container sm={sm}>
            <Column>
                <Link href="#">
                    <FacebookIcon />
                </Link>
            </Column>
            <Column>
                <Link href="#">
                    <InstagramIcon />
                </Link>
            </Column>
            <Column>
                <Link href="#">
                    <TwitterIcon />
                </Link>
            </Column>
            <Column>
                <Link href="#">
                    <MailIcon />
                </Link>
            </Column>
            <Column>
                <Link href="#">
                    <AppleIcon />
                </Link>
            </Column>
        </Container>
    );
};

export default SocialMedia;
