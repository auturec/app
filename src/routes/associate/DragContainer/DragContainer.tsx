import React from 'react';
import Draggable from 'react-draggable';
import Canvas from '../Canvas/canvas';

import './DragContainer.scss';

interface DragContainerProps {
  name: string;
}

const DragContainer = (props: DragContainerProps) => {
  const { name } = props;
  return (
    <div>
      <Draggable handle="strong" bounds="div">
        <div className="box no-cursor">
          <strong className="cursor">
            <div>{name}</div>
          </strong>
          <div className="canvas-box">
            <Canvas height={340} width={380} />
          </div>
        </div>
      </Draggable>
    </div>
  );
};

export default DragContainer;
