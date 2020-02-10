import React from 'react';
import Draggable, { DraggableEventHandler } from 'react-draggable';

interface ItemProps {
  name: string;
  image: string;
  handleDroppedItem: DraggableEventHandler;
}

export const Item: React.FC<ItemProps> = ({
  name,
  image,
  handleDroppedItem
}) => {
  const labelArray: string[] = image.split('/');
  const labelDots: string = labelArray[labelArray.length - 1];
  const label: string = labelDots.split('.')[0];

  return (
    <Draggable onStop={handleDroppedItem} defaultClassName={name}>
      <div>
        <img src={image} alt={label} height={100} width={100} />
        <p>{label}</p>
      </div>
    </Draggable>
  );
};

export default Item;
