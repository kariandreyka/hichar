import React from 'react';
import { Switch, BrowserRouter as Router, Route } from 'react-router-dom';
import LandingPage from '../presentation/pages/LandingPage/index';
import LoginPage from '../presentation/pages/LoginPage/index';

const Routes = () => (
    <Router>
        <Switch>
            <Route exact path="/" component={LandingPage} />
            <Route path="/login" component={LoginPage} />
        </Switch>
    </Router>
);

export default Routes;
