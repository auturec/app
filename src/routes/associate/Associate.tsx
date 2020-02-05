import React from 'react';
import Game from './Game/Game';

import './Associate.scss';

export const Associate: React.FC = () => {
  return (
    <div className="associate group">
      <div>Associate</div>
      <div>Choose the right item associated with the big picture!</div>
      <Game />
    </div>
  );
};

export default Associate;
