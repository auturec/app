import React, { useState, useRef } from 'react';
import { ResizableBox, ResizeCallbackData } from 'react-resizable';

import './ResizeContainer.scss';

interface ResizeWindowProps {
  height: number;
  width: number;
}

const DefaultWindowProps: ResizeWindowProps = {
  height: 200,
  width: 200
};

const ResizeContainer: React.FC = () => {
  const ref = useRef(null);
  const [currentSize] = useState(DefaultWindowProps);
  function useEventHandler(
    /* global Element, Event */
    /* eslint no-undef: "error" */
    e: React.SyntheticEvent<Element, Event>,
    data: ResizeCallbackData
  ): ResizeWindowProps {
    return {
      height: data.size.height,
      width: data.size.width
    };
  }

  // TODO: set hooks here to view current height and width

  return (
    <ResizableBox
      className="box"
      width={200}
      height={200}
      minConstraints={[150, 150]}
      maxConstraints={[500, 300]}
      lockAspectRatio
      onResizeStop={useEventHandler}
      ref={ref}
    >
      <p>
        Current height {currentSize.height} {currentSize.width}
      </p>
    </ResizableBox>
  );
};

export default ResizeContainer;
