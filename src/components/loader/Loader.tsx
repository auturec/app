import React from 'react';

import BounceLoader from 'react-spinners/BounceLoader';
import { css } from '@emotion/core';

import './Loader.scss';

const override = css`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;

const Loader: React.FC = () => {
  return (
    <div className="loader__spinner">
      <BounceLoader
        css={override}
        sizeUnit="px"
        size={150}
        color="hsl(217, 71%, 53%)"
        loading
      />
    </div>
  );
};

export default Loader;
