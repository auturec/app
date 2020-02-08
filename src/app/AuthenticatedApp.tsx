import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  useHistory
} from 'react-router-dom';

import Dashboard from 'routes/dashboard';
import Associate from 'routes/associate';
import Tiles from 'routes/tiles';
import { PROFILE, ASSOCIATE, TILES } from 'constants/routes';

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
        <Route exact path={TILES} component={Tiles} />
        <Route exact path={ASSOCIATE} component={Associate} />
        <Route component={RedirectPath} />
      </Switch>
    </Router>
  );
};

export default AuthenticatedApp;
