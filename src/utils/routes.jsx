import React from 'react';
import { Switch, BrowserRouter as Router, Route } from 'react-router-dom';
import LandingPage from '../presentation/pages/LandingPage/index';
import LoginPage from '../presentation/pages/LoginPage/index';
import Test from '../presentation/pages/TestPage';
import Layout from '../presentation/components/Layout/index';
import LayoutHeader from '../presentation/components/Layout/Header/Header';
import LayoutFooter from '../presentation/components/Layout/Footer/index';
import LayoutContent from '../presentation/components/Layout/LayoutContent';

const Routes = () => (
    <Router>
        <Layout>
            <LayoutHeader />
            <LayoutContent>
                <Switch>
                    <Route path="/login" component={LoginPage} />
                    <Route path="/test" component={Test} />
                    <Route exact path="/" component={LandingPage} />
                </Switch>
            </LayoutContent>
            <LayoutFooter />
        </Layout>
    </Router>
);

export default Routes;
