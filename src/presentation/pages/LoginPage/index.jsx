import React from 'react';
import { LoginPageStyles } from './styles';
import Nav from '../../components/Header/Nav/Navbar';
import Footer from '../../components/Footer/index';
import Main from '../../components/Main/index';

const LoginPage = () => (
    <LoginPageStyles>
        <Nav />
        <Main />
        <Footer />
    </LoginPageStyles>
);

export default LoginPage;
