import React from 'react';
import Game from './Game/Game';

import './Associate.scss';

export const Associate: React.FC = () => {
  return (
    <div className="associate group">
      <div>Associate</div>
      <div>
        Match the items on the left to the correct associated item on the right!
      </div>
      <Game />
    </div>
  );
};

export default Associate;
