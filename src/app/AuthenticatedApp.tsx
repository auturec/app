import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  useHistory
} from 'react-router-dom';

import Dashboard from 'routes/dashboard';
import { PROFILE } from 'constants/routes';

const RedirectPath = () => {
  const history = useHistory();
  React.useEffect(() => {
    history.push(PROFILE);
  });
  return null;
};

const AuthenticatedApp: React.FC = () => {
  return (
    <Router>
      <Switch>
        <Route exact path={PROFILE} component={Dashboard} />
        <Route component={RedirectPath} />
      </Switch>
    </Router>
  );
};

export default AuthenticatedApp;
