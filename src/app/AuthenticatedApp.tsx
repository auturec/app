import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  useLocation
} from 'react-router-dom';

import Dashboard from 'routes/dashboard';
import Profile from 'routes/profile';

import AppLayout from 'layouts/AppLayout';

import { HOME, PROFILE } from 'constants/routes';

const ScrollToTop = () => {
  const { pathname } = useLocation();

  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
};

const AuthenticatedApp: React.FC = () => {
  return (
    <Router>
      <AppLayout>
        <ScrollToTop />
        <Switch>
          <Route exact path={HOME} component={Dashboard} />
          <Route exact path={PROFILE} component={Profile} />
        </Switch>
      </AppLayout>
    </Router>
  );
};

export default AuthenticatedApp;
