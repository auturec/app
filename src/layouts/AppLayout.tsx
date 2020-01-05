import React from 'react';
import NavBar from 'components/navbar';

const AppLayout: React.FC = ({ children }) => {
  return (
    <div>
      <NavBar />
      <div>{children}</div>
    </div>
  );
};

export default AppLayout;
