import React, { useState } from 'react';
import { Col } from 'antd';
import { useHistory } from 'react-router-dom';
import { Nav, Container, Column, Link, Image } from './styles';
import SearchBar from '../../../Search/SearchBar';
import LoginModal from '../../../LoginModal/index';
import { Text } from '../../../Typography/styles';
import DropDownUserInfo from '../../../DropdownMenu/index';

const Navbar = (props) => {
    const [visible, setVisible] = useState(false);
    const { userInfo } = props;
    const history = useHistory();
    const handleCancel = () => {
        setVisible(false);
    };

    const handleRouteLogin = () => {
        history.push('/login');
    };
    const handleRouteLogo = () => {
        history.push('/');
    };

    return (
        <Nav>
            <Container>
                <Col xs={8} sm={12} className="logo" onClick={handleRouteLogo}>
                    <Link>
                        <Image>
                            <img style={{ height: '1.25rem' }} src="https://cdn.cameo.com/staticDir/logo_white.svg" alt="" />
                        </Image>
                    </Link>
                </Col>
                <Column sm={12} style={{ color: 'white' }}>
                    <SearchBar />
                    <Link>
                        {userInfo ? (
                            <DropDownUserInfo />
                        ) : (
                            <Text onClick={handleRouteLogin} family="secondary">
                                Login
                            </Text>
                        )}
                    </Link>
                </Column>
            </Container>
            <LoginModal visible={visible} onCancel={handleCancel} setVisible={setVisible} />
        </Nav>
    );
};

export default Navbar;
