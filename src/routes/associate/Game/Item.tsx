import React from 'react';

interface ItemProps {
  name: string;
  image: string;
}

export const Item: React.FC<ItemProps> = (props: ItemProps) => {
  const { name, image } = props;
  return <img alt={`${name}`} src={image} height={200} width={200} />;
};

export default Item;
