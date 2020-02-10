import React from 'react';

interface ItemDropContainerProps {
  image: string;
}

export const ItemDropContainer: React.FC<ItemDropContainerProps> = ({
  image
}) => {
  const labelArray = image.split('/');
  const labelDots = labelArray[labelArray.length - 1];
  const label = labelDots.split('.')[0];

  return (
    <div>
      <img src={image} alt={label} height={150} width={150} />
      <p> {label} </p>
    </div>
  );
};

export default ItemDropContainer;
