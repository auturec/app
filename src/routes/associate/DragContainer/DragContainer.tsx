import React from 'react';
import Draggable from 'react-draggable';
import Canvas from '../Canvas/canvas';

import './DragContainer.scss';

const DragContainer = () => {
  return (
    <Draggable handle="strong">
      <div className="box no-cursor">
        <strong className="cursor">
          <div>Item, Drag Here</div>
        </strong>
        <div className="canvas-box">
          <Canvas height={340} width={380} />
        </div>
      </div>
    </Draggable>
  );
};

export default DragContainer;
