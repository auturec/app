import React from 'react';
import { ToastProvider } from 'react-toast-notifications';
import { UserProvider } from './UserContext';

const AppProviders: React.FC = ({ children }) => {
  return (
    <UserProvider>
      <ToastProvider>{children}</ToastProvider>
    </UserProvider>
  );
};

export default AppProviders;
