import React from 'react';
import { Swipeable } from 'react-swipeable';
import Pagination from './Pagination';
import Tabs from './Tabs';

import '../Main.scss';

interface OnBoardingProps {
  setIsOnBoarding: (isOnBoarding: boolean) => void;
}

const OnBoarding: React.FC<OnBoardingProps> = ({ setIsOnBoarding }) => {
  const [tab, setTab] = React.useState(1);
  const handleTab = (next: boolean) => {
    if (next === true) {
      if (tab !== 3) {
        setTab(tab + 1);
      }
    } else if (tab !== 1) {
      setTab(tab - 1);
    }
  };
  const config = {
    onSwipedLeft: () => handleTab(true),
    onSwipedRight: () => handleTab(false),
    preventDefaultTouchmoveEvent: true,
    trackMouse: true
  };

  const handleNext = () => {
    setIsOnBoarding(false);
  };

  return (
    <div>
      {/* eslint-disable-next-line react/jsx-props-no-spreading */}
      <Swipeable {...config}>
        <Tabs tab={tab} />
      </Swipeable>
      <Pagination tab={tab} setTab={setTab} />
      <button
        type="button"
        className="button is-pulled-right main__tab--button"
        onClick={handleNext}
      >
        {tab === 3 ? 'Next' : 'Skip'}
      </button>
    </div>
  );
};

export default OnBoarding;
