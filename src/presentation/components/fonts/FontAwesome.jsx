import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronRight, faSearch, faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faFacebookF, faInstagram, faTwitter, faApple } from '@fortawesome/free-brands-svg-icons';

export const ChevronRight = () => <FontAwesomeIcon icon={faChevronRight} />;
export const SearchIcon = () => <FontAwesomeIcon icon={faSearch} />;
export const FacebookIcon = () => <FontAwesomeIcon icon={faFacebookF} />;
export const InstagramIcon = () => <FontAwesomeIcon icon={faInstagram} />;
export const TwitterIcon = () => <FontAwesomeIcon icon={faTwitter} />;
export const MailIcon = () => <FontAwesomeIcon icon={faEnvelope} />;
export const AppleIcon = () => <FontAwesomeIcon icon={faApple} />;
