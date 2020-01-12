import React from 'react';
import TabOne from './TabOne';
import TabTwo from './TabTwo';
import TabThree from './TabThree';

import '../Main.scss';

interface TabsProps {
  tab: number;
}
const Tabs: React.FC<TabsProps> = ({ tab }) => {
  if (tab === 1) {
    return <TabOne />;
  }
  if (tab === 2) {
    return <TabTwo />;
  }
  if (tab === 3) {
    return <TabThree />;
  }
  return <div />;
};

export default Tabs;
