import React from 'react';
import DragContainer from './DragContainer/DragContainer';
import Game from './Game/Game';

import './Associate.scss';

const Associate: React.FC = () => {
  return (
    <div className="columns associate">
      <div className="column">
        <div className="is-centered">Associate game page</div>
        <Game />
        <DragContainer />
      </div>
    </div>
  );
};

export default Associate;
