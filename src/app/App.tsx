import React from 'react';
import AppLoader from 'components/appLoader';
import { useUser } from 'contexts/UserContext';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import AppLayout from 'layouts/AppLayout';
import Main from 'routes/main';
import Testimonial from 'routes/testimonial';
import { HOME, TESTIMONIAL } from 'constants/routes';

const UnauthenticatedApp = React.lazy(() => import('./UnauthenticatedApp'));
const AuthenticatedApp = React.lazy(() => import('./AuthenticatedApp'));

const ScrollToTop = () => {
  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return null;
};

const App: React.FC = () => {
  const { user } = useUser();
  const { uid, isVerifying } = user;
  if (isVerifying) {
    return <AppLoader />;
  }
  return (
    <React.Suspense fallback={<AppLoader />}>
      <Router>
        <AppLayout>
          <ScrollToTop />
          <Switch>
            <Route exact path={HOME} component={Main} />
            <Route exact path={TESTIMONIAL} component={Testimonial} />
            {uid ? <AuthenticatedApp /> : <UnauthenticatedApp />}
          </Switch>
        </AppLayout>
      </Router>
    </React.Suspense>
  );
};

export default App;
