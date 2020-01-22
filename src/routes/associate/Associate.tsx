import React from 'react';
import Game from './Game/Game';

import './Associate.scss';

const Associate: React.FC = () => {
  return (
    <div className="columns associate">
      <div className="column">
        <div className="is-centered">Associate game page</div>
        <h5>Test</h5>
        <Game />
      </div>
    </div>
  );
};

export default Associate;
