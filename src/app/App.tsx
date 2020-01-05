import React from 'react';
import Loader from 'components/loader';
import { useUser } from 'contexts/UserContext';

const UnauthenticatedApp = React.lazy(() => import('./UnauthenticatedApp'));
const AuthenticatedApp = React.lazy(() => import('./AuthenticatedApp'));

const App: React.FC = () => {
  const { user } = useUser();
  const { uid, isVerifying } = user;
  if (isVerifying) {
    return <Loader />;
  }
  return (
    <React.Suspense fallback={<Loader />}>
      {uid ? <AuthenticatedApp /> : <UnauthenticatedApp />}
    </React.Suspense>
  );
};

export default App;
