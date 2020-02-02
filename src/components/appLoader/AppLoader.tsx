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
        color="#00C774"
        loading
      />
    </div>
  );
};

export default AppLoader;
