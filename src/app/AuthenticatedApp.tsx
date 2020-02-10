import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect
} from 'react-router-dom';

import Dashboard from 'routes/dashboard';
import Associate from 'routes/associate';
import { PROFILE, ASSOCIATE } from 'constants/routes';

const AuthenticatedApp: React.FC = () => {
  return (
    <Router>
      <Switch>
        <Route exact path={PROFILE} component={Dashboard} />
        <Route exact path={ASSOCIATE} component={Associate} />
        <Redirect to={PROFILE} />
      </Switch>
    </Router>
  );
};

export default AuthenticatedApp;
