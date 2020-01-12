import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  useHistory
} from 'react-router-dom';

import Login from 'routes/login';

import { LOGIN, HOME } from 'constants/routes';

const RedirectPath = () => {
  const history = useHistory();
  React.useEffect(() => {
    history.push(HOME);
  });
  return null;
};

const UnauthenticatedApp: React.FC = () => {
  return (
    <Router>
      <Switch>
        <Route exact path={LOGIN} component={Login} />
        <Route component={RedirectPath} />
      </Switch>
    </Router>
  );
};

export default UnauthenticatedApp;
