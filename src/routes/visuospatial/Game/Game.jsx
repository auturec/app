import React from 'react';

import DisplayImageList from './DisplayImageList';
import Instructions from './Instructions';
import ImageList from './GameImages';

const Game = () => {
  return (
    <div className="row">
      <Instructions />
      <DisplayImageList imgList={ImageList} />
    </div>
  );
};

export default Game;
