import React, { Suspense } from 'react';
import Loader from 'components/loader/Loader';

const UnauthenticatedApp = React.lazy(() => import('./UnauthenticatedApp'));

const App: React.FC = () => {
  return (
    <Suspense fallback={<Loader />}>
      <UnauthenticatedApp />
    </Suspense>
  );
};

export default App;
