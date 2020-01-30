import React from 'react';
import { useDrag, DragSourceMonitor } from 'react-dnd';

interface ItemProps {
  name: string;
  image: string;
  handleDroppedItem: (name: string, result: boolean) => void;
}

export const Item: React.FC<ItemProps> = ({
  name,
  image,
  handleDroppedItem
}) => {
  const [{ isDragging }, drag] = useDrag({
    item: { name, type: 'Item' },
    end: (item: { name: string } | undefined, monitor: DragSourceMonitor) => {
      const dropResult = monitor.getDropResult();
      if (item && dropResult) {
        const result: boolean = item.name === dropResult.name;
        handleDroppedItem(name, result);
      }
    },
    collect: monitor => ({
      isDragging: monitor.isDragging()
    })
  });

  const opacity: number = isDragging ? 0.4 : 1;

  const labelArray: string[] = image.split('/');
  const labelDots: string = labelArray[labelArray.length - 1];
  const label: string = labelDots.split('.')[0];

  return (
    <div ref={drag} style={{ opacity }} className="is-left">
      <img src={image} alt={label} height={100} width={100} />
      <p>{label}</p>
    </div>
  );
};

export default Item;
