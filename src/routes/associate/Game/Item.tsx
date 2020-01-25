import React from 'react';
import { useDrag, DragSourceMonitor } from 'react-dnd';

interface ItemProps {
  name: string;
  image: string;
  handleDroppedItem: (name: string) => void;
}

export const Item: React.FC<ItemProps> = ({ name, handleDroppedItem }) => {
  const [{ isDragging }, drag] = useDrag({
    item: { name, type: name },
    end: (item: { name: string } | undefined, monitor: DragSourceMonitor) => {
      const dropResult = monitor.getDropResult();
      if (item && dropResult) {
        handleDroppedItem(name);
      }
    },
    collect: monitor => ({
      isDragging: monitor.isDragging()
    })
  });

  const opacity = isDragging ? 0.4 : 1;

  return (
    <div ref={drag} style={{ opacity }}>
      <span>{name}</span>
    </div>
  );
};

export default Item;
