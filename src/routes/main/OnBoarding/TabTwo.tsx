import React from 'react';
import PAGE2_BOY from 'assets/images/Page2_Boy.svg';

import '../Main.scss';

const TabTwo: React.FC = () => {
  return (
    <div className="columns is-paddingless is-marginless">
      <div className="column main__tab--background-one">
        <img
          src={PAGE2_BOY}
          alt="react"
          width="300"
          className="main__tab--img"
        />
      </div>
      <div className="column">
        <div className="main__tab--title">Games and Activities</div>
        <div className="main__tab--subtitle">Expert Certified Activities</div>
        <div className="main__tab--subtitle">created specially for your</div>
        <div className="main__tab--subtitle">Special Child</div>
      </div>
    </div>
  );
};

export default TabTwo;
