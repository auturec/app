import React from 'react';
import { useDrag, DragSourceMonitor } from 'react-dnd';

interface ItemProps {
  name: string;
  image: string;
  handleDroppedItem: (name: string) => void;
}

export const Item: React.FC<ItemProps> = ({
  name,
  image,
  handleDroppedItem
}) => {
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

  const labelArray = image.split('/');
  const label = labelArray[labelArray.length - 1];

  return (
    <div ref={drag} style={{ opacity }}>
      <p>{label}</p>
      <img src={image} alt={label} height={200} width={200} />
    </div>
  );
};

export default Item;
