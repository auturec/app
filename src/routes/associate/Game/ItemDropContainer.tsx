import React from 'react';
import { useDrop } from 'react-dnd';

interface ItemDropContainerProps {
  name: string;
  image: string;
}

export const ItemDropContainer: React.FC<ItemDropContainerProps> = ({
  name,
  image
}) => {
  const [{ canDrop, isOver }, drop] = useDrop({
    accept: name,
    drop: () => ({ name }),
    collect: monitor => ({
      isOver: monitor.isOver(),
      canDrop: monitor.canDrop()
    })
  });

  const isActive = canDrop && isOver;

  const labelArray = image.split('/');
  const label = labelArray[labelArray.length - 1];

  return (
    <div ref={drop} className="is-right">
      <p> {isActive ? label : label} </p>
      <img src={image} alt={label} height={200} width={200} />
    </div>
  );
};

export default ItemDropContainer;
