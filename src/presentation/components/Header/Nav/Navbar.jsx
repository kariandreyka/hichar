import React, { useState } from 'react';
import { Col, Modal, Button } from 'antd';
import { Nav, Container, Column, Link, Image } from './styles';
import SearchBar from '../../Search/SearchBar';
import LoginModal from '../../Login/index';

const Navbar = () => {
    const [visible, setVisible] = useState(false);

    const handleCancel = () => {
        console.log('Clicked cancel button');
        setVisible(false);
    };
    return (
        <Nav>
            <Container>
                <Col xs={8} sm={12} className="logo">
                    <a href="/">
                        <Image>
                            <img style={{ height: '1rem' }} src="https://cdn.cameo.com/staticDir/logo_white.svg" alt="" />
                        </Image>
                    </a>
                </Col>
                <Column sm={12} style={{ color: 'white' }}>
                    <SearchBar />
                    <Link href="/login">Login</Link>
                </Column>
            </Container>
            <LoginModal visible={visible} onCancel={handleCancel} setVisible={setVisible} />
        </Nav>
    );
};

export default Navbar;
