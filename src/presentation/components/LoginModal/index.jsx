import React from 'react';
import { LoginModal } from './styles';
import LoginForm from './LoginForm/index';
import useMediaQuery from '../../../utils/Hooks/userMediaQuery';

const Login = (props) => {
    const { setVisible } = props;
    const { xs, sm, md, lg, xl } = useMediaQuery();
    return (
        <LoginModal xs={xs} sm={sm} md={md} lg={lg} xl={xl} {...props}>
            <LoginForm setVisible={setVisible} />
        </LoginModal>
    );
};

export default Login;
