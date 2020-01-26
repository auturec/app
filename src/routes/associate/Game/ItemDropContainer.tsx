import React from 'react';
import { useDrop } from 'react-dnd';

interface ItemDropContainerProps {
  name: string;
  image: string;
}

export const ItemDropContainer: React.FC<ItemDropContainerProps> = ({
  name
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
  return (
    <div ref={drop} className="is-right">
      <p> {isActive ? 'Drop here!' : name} </p>
    </div>
  );
};

export default ItemDropContainer;
