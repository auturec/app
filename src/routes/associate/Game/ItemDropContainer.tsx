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
      <div> {isActive ? 'Drop here!' : name} </div>
    </div>
  );
};

export default ItemDropContainer;
