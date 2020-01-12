import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  useLocation,
  useHistory
} from 'react-router-dom';

import Dashboard from 'routes/dashboard';

import AppLayout from 'layouts/AppLayout';

import { useUser } from 'contexts/UserContext';
import { HOME } from 'constants/routes';

const ScrollToTop = () => {
  const history = useHistory();
  const {
    user: { uid }
  } = useUser();
  const { pathname } = useLocation();

  React.useEffect(() => {
    window.scrollTo(0, 0);
    if (uid === '') {
      history.push(`${HOME}`);
    }
  }, [pathname, history, uid]);
  return null;
};

const AuthenticatedApp: React.FC = () => {
  return (
    <Router>
      <AppLayout>
        <ScrollToTop />
        <Switch>
          <Route exact path={HOME} component={Dashboard} />
        </Switch>
      </AppLayout>
    </Router>
  );
};

export default AuthenticatedApp;
