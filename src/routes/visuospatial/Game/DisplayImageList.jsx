import React from 'react';
import { ImageList } from './GameImages';
import { DisplayImage } from './DisplayImage';

// to change to tsx later. error is binding element has implicit any type react for the paramter ImageList in DisplayImage
// handles the selection of image
// also handles the resizing of image

const DisplayImageList = () => {
  // returns 1 random image from the list of images
  const getRandomFromArray = array => {
    const randomArray = array.sort(() => 0.5 - Math.random());
    return randomArray.slice(0, 1);
  };

  // get 1 random image from the list of images
  const getImage = arr => {
    const selectedImageDict = getRandomFromArray(arr); // returns the dict
    const selectedImage = selectedImageDict[image];
    return { selectedImageDict };
  };

  const shuffleArray = original => {
    const array = original;
    for (let i = array.length - 1; i > 0; i -= 1) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
  };

  const imageSizes = ['200', '225', '250', '275']; // to resize the images

  const shuffledSizes = shuffleArray(imageSizes);
  const image = getImage(ImageList);

  const imagesArray = shuffledSizes.map((size, idx) => {
    return <DisplayImage image={image} size={size} />;
  });

  return <div className="row">{imagesArray}</div>;
};

export default DisplayImageList;
