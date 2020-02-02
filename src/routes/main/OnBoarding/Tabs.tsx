import React from 'react';
import TabOne from './TabOne';
import TabTwo from './TabTwo';
import TabThree from './TabThree';

import '../Main.scss';

const Tabs: React.FC = () => {
  return (
    <div>
      <TabOne />
      <TabTwo />
      <TabThree />
    </div>
  );
};

export default Tabs;
