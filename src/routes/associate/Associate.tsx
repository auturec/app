import React from 'react';
import { ToastProvider } from 'react-toast-notifications';
import Game from './Game/Game';

import './Associate.scss';

export const Associate: React.FC = () => {
  return (
    <div className="associate">
      <ToastProvider>
        <Game />
      </ToastProvider>
    </div>
  );
};

export default Associate;
