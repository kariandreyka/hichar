import React, { useState } from 'react';
import { DownOutlined } from '@ant-design/icons';
import { useDispatch } from 'react-redux';
import { StyledImg, GlobalStyle, StyledDropdown, StyledMenu, Section } from './styles';
import { Text } from '../Typography/styles';
import { Logout } from '../../../utils/Redux/Auth/action';

const DropdownUserMenu = () => {
    const [isDropdownOpen, setDropdownOpen] = useState(false);
    const dispatch = useDispatch();

    const handleMenuClick = () => {};
    const handleButtonClick = () => {
        setDropdownOpen(!isDropdownOpen);
    };
    const logOutHandler = () => {
        dispatch(Logout());
    };

    const logicalExpr = (arg) => {
            return Array.isArray(arg)
    }

    const menu = (
        <StyledMenu onClick={handleMenuClick}>
            <StyledMenu.Item key="1">
                <Text family="secondary">Account</Text>
            </StyledMenu.Item>
            <StyledMenu.Item key="2">
                <Text family="secondary">Saved</Text>
            </StyledMenu.Item>
            <StyledMenu.Item key="3" style={{ display: 'flex', flexDirection: 'column' }}>
                <Text family="secondary">Invite Friends</Text>
                <Text
                    family="secondary"
                    size="tiny"
                    style={{ borderRadius: '5px', padding: '0px 3px', width: 'max-content', backgroundColor: 'rgb(255, 3, 124)' }}>
                    Get $5
                </Text>
            </StyledMenu.Item>
            <StyledMenu.Item key="4">
                <Text family="secondary">Gift Cards</Text>
            </StyledMenu.Item>
            <StyledMenu.Item key="5" onClick={logOutHandler}>
                <Text family="secondary">Logout</Text>
            </StyledMenu.Item>
        </StyledMenu>
    );
    return (
        <Section className={isDropdownOpen && 'rotate'} onClick={handleButtonClick}>
            <GlobalStyle />
            <StyledDropdown.Button
                trigger={['click']}
                overlay={menu}
                icon={<StyledImg src="https://d31wcbk3iidrjq.cloudfront.net/-GMEsFgaL.jpg?w=80&h=80" />}
            />
            <DownOutlined />
        </Section>
    );
};

export default DropdownUserMenu;
