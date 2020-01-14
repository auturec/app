import React from 'react';
import Canvas from './Canvas/canvas';

import './Associate.scss';

const Associate: React.FC = () => {
  return (
    <div className="columns is-centered is-marginless is-paddingless">
      <div className="column is-four-fifths">
        <div className="is-centered">Associate game page</div>
        <Canvas />
      </div>
    </div>
  );
};

export default Associate;
