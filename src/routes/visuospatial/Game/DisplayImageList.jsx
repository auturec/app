import React from 'react';
import DisplayImage from './DisplayImage';

// to change to tsx later. error is binding element has implicit any type react for the paramter ImageList in DisplayImage
// handles the selection of image
// also handles the resizing of image

const DisplayImageList = ({ imgList }) => {
  // returns 1 random image from the list of images
  //   const getRandomFromArray = (array) => {
  //     const randomArray = array.sort(() => 0.5 - Math.random());
  //     return randomArray.slice(0, 1);
  //   };

  const getRanEleFromArray = array => {
    const ranId = Math.floor(array.length * Math.random());
    return array[ranId];
  };

  // get 1 random image from the list of images
  const getImage = arr => {
    let selectedImageDict = getRanEleFromArray(arr); // returns the dict
    let selectedImage = selectedImageDict[image];
    return { selectedImage };
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
  let image = getImage(imgList);

  const imagesArray = shuffledSizes.map((size, idx) => {
    return <DisplayImage image={image} size={size} />;
  });

  return <div className="row">{imagesArray}</div>;
};

export default DisplayImageList;
