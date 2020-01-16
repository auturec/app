import React from 'react';
import DragContainer from './DragContainer/DragContainer';

import './Associate.scss';

const Associate: React.FC = () => {
  return (
    <div className="columns associate">
      <div className="column">
        <div className="is-centered">Associate game page</div>
        <DragContainer />
      </div>
    </div>
  );
};

export default Associate;
