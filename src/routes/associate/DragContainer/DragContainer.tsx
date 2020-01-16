import React from 'react';
import Draggable from 'react-draggable';
import Canvas from '../Canvas/canvas';

import './DragContainer.scss';

const DragContainer = () => {
  return (
    <Draggable>
      <div className="box no-cursor">
        <strong className="cursor">
          <div>Item, Drag Here</div>
        </strong>
        <div className="box --innner-box">
          <Canvas height={200} width={200} />
        </div>
      </div>
    </Draggable>
  );
};

export default DragContainer;
