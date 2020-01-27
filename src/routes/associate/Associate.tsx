import React from 'react';
import Game from './Game/Game';

import './Associate.scss';

export const Associate: React.FC = () => {
  return (
    <div className="associate group">
      <div>Associate Game Page</div>
      <Game />
    </div>
  );
};

export default Associate;
