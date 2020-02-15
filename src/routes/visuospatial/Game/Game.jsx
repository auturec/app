import React, { useState } from 'react';

import DisplayImageList from './DisplayImageList';
import Instructions from './Instructions';

const Game = () => {
  return (
    <div className="row">
      <Instructions />
      <DisplayImageList />
    </div>
  );
};
