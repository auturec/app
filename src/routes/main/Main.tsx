import React from 'react';

import AppLayout from 'layouts/AppLayout';

import './Main.scss';

const Main: React.FC = () => {
  return (
    <AppLayout>
      <div className="main__text">Hello World</div>
    </AppLayout>
  );
};

export default Main;
