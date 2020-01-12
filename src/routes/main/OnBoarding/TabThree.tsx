import React from 'react';
import PAGE3_BOY from 'assets/images/Page3_Boy.svg';

import '../Main.scss';

const TabThree: React.FC = () => {
  return (
    <div className="columns is-paddingless is-marginless">
      <div className="column main__tab--background-one">
        <img
          src={PAGE3_BOY}
          alt="react"
          width="300"
          className="main__tab--img"
        />
      </div>
      <div className="column">
        <div className="main__tab--title">Forum and Community</div>
        <div className="main__tab--subtitle">Made Just For You</div>
      </div>
    </div>
  );
};

export default TabThree;
