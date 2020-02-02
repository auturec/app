import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect
} from 'react-router-dom';

import Login from 'routes/login';

import { LOGIN, HOME } from 'constants/routes';

const UnauthenticatedApp: React.FC = () => {
  return (
    <Router>
      <Switch>
        <Route exact path={LOGIN} component={Login} />
        <Redirect to={HOME} />
      </Switch>
    </Router>
  );
};

export default UnauthenticatedApp;
