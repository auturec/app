import React from 'react';
import AppLoader from 'components/appLoader';
import { useUser } from 'contexts/UserContext';

const UnauthenticatedApp = React.lazy(() => import('./UnauthenticatedApp'));
const AuthenticatedApp = React.lazy(() => import('./AuthenticatedApp'));

const App: React.FC = () => {
  const { user } = useUser();
  const { uid, isVerifying } = user;
  if (isVerifying) {
    return <AppLoader />;
  }
  return (
    <React.Suspense fallback={<AppLoader />}>
      {uid ? <AuthenticatedApp /> : <UnauthenticatedApp />}
    </React.Suspense>
  );
};

export default App;
