import React from 'react';
import { useUser } from 'contexts/UserContext';
import Onboarding from './OnBoarding/OnBoarding';
import './Main.scss';

const Main: React.FC = () => {
  const { user } = useUser();
  const [isOnBoarding, setIsOnBoarding] = React.useState(true);
  const isNewUser = isOnBoarding && user.uid === '';
  return (
    <div className="columns is-centered is-marginless">
      <div className="column is-two-thirds">
        <div className="main__box">
          <div className="main__box--wrapper">
            {isNewUser ? (
              <Onboarding setIsOnBoarding={setIsOnBoarding} />
            ) : (
              'This is the main page'
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Main;
