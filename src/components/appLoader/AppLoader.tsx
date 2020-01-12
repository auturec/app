import React from 'react';

import BounceLoader from 'react-spinners/BounceLoader';
import { css } from '@emotion/core';

import './AppLoader.scss';

const override = css`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;

const AppLoader: React.FC = () => {
  return (
    <div className="app-loader__spinner">
      <BounceLoader
        css={override}
        sizeUnit="px"
        size={150}
        color="#3e61fa"
        loading
      />
    </div>
  );
};

export default AppLoader;
