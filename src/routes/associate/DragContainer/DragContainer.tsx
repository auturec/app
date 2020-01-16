import React from 'react';
import Draggable from 'react-draggable';
import Canvas from '../Canvas/canvas';

const DragContainer = () => {
  return (
    <Draggable handle="strong">
      <div className="box no-cursor">
        <strong className="cursor">
          <div>Drag here</div>
        </strong>
        <div>
          <Canvas />
        </div>
      </div>
    </Draggable>
  );
};

export default DragContainer;
