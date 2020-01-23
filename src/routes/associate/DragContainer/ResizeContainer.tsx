import React, { useState } from 'react';
import { ResizableBox, ResizeCallbackData } from 'react-resizable';
import DragContainer from './DragContainer';

type ResizeContainerProps = {
  name: string;
};

const ResizeContainer = (props: ResizeContainerProps) => {
  const [currentSize] = useState({
    height: 200,
    width: 200
  });
  const { name } = props;

  function useEventHandler(
    /* global Element, Event */
    /* eslint no-undef: "error" */

    e: React.SyntheticEvent<Element, Event>,
    data: ResizeCallbackData
  ) {
    return { height: data.size.height, width: data.size.width };
  }

  // set hooks here to view current height and width

  return (
    <ResizableBox
      className="box"
      width={200}
      height={200}
      minConstraints={[150, 150]}
      maxConstraints={[500, 300]}
      lockAspectRatio
      onResizeStop={useEventHandler}
    >
      <p>
        Current height {currentSize.height} {currentSize.width}
      </p>
      <span>
        <DragContainer name={name} />
      </span>
    </ResizableBox>
  );
};

export default ResizeContainer;
