import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect
} from 'react-router-dom';

import Dashboard from 'routes/dashboard';
import { PROFILE } from 'constants/routes';

const AuthenticatedApp: React.FC = () => {
  return (
    <Router>
      <Switch>
        <Route exact path={PROFILE} component={Dashboard} />
        <Redirect to={PROFILE} />
      </Switch>
    </Router>
  );
};

export default AuthenticatedApp;
