import React from 'react';
import Game from './Game/Game';

import './Associate.scss';

const Associate: React.FC = () => {
  return (
    <div className="columns associate">
      <div className="column">
        <div className="is-left">Associate Game Page</div>
        <Game />
      </div>
    </div>
  );
};

export default Associate;
