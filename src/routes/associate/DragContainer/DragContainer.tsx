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
    <Draggable
      handle="strong"
      bounds={{ top: -15, left: -5, right: 600, bottom: 20 }}
    >
      <div className="box no-cursor">
        <strong className="cursor">
          <div>{name}</div>
        </strong>
        <div className="canvas-box">
          <Canvas height={340} width={380} />
        </div>
      </div>
    </Draggable>
  );
};

export default DragContainer;
