import React, { useEffect } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  useLocation
} from 'react-router-dom';

import Main from 'routes/main/Main';

import { HOME } from 'constants/routes';

const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
};

const UnauthenticatedApp: React.FC = () => {
  return (
    <Router>
      <ScrollToTop />
      <Switch>
        <Route exact path={HOME} component={Main} />
      </Switch>
    </Router>
  );
};

export default UnauthenticatedApp;
