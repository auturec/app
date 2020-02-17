import React from 'react';

// to change to tsx later. error is binding element has implicit any type react for the paramter ImageList in DisplayImage

const DisplayImage = ({ image, size }) => {
  return (
    <div>
      <img src={image} height={size} width={size} alt="image1" />
    </div>
  );
};

export default DisplayImage;
