import React from 'react';
import PAGE1_BOY from 'assets/images/Page1_Boy.svg';

import '../Main.scss';

const TabOne: React.FC = () => {
  return (
    <div className="columns is-paddingless is-marginless">
      <div className="column main__tab--background-one">
        <img
          src={PAGE1_BOY}
          alt="react"
          width="300"
          className="main__tab--img"
        />
      </div>
      <div className="column">
        <div className="main__tab--title">Child Profiling</div>
        <div className="main__tab--subtitle">Track Your</div>
        <div className="main__tab--subtitle">Child&apos;s Progress</div>
      </div>
    </div>
  );
};

export default TabOne;
