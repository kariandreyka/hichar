import React from 'react';
import Login from '../../../components/LoginModal/LoginForm/index';
import { Container, Main } from './styles';
import useMediaQuery from '../../../../utils/Hooks/userMediaQuery';

const MainWrapper = () => {
    const { xs, sm, lg, md } = useMediaQuery();

    return (
        <Main xs={xs} sm={sm} lg={lg} md={md}>
            <Container>
                <Login />
            </Container>
        </Main>
    );
};

export default MainWrapper;
