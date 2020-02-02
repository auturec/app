import React from 'react';
import { Link } from 'react-router-dom';
import APP_LOGO from 'assets/images/app.png';
import { LOGIN } from 'constants/routes';
import Onboarding from './OnBoarding/OnBoarding';
import './Main.scss';

const Main: React.FC = () => {
  return (
    <div className="columns is-centered is-marginless is-paddingless">
      <div className="column is-two-thirds">
        <div className="main__box">
          <div className="main__box--wrapper">
            <div className="main__box--header">
              <div className="columns is-centered is-marginless is-paddingless">
                <img
                  src={APP_LOGO}
                  alt="app"
                  width="150"
                  className="bar__menu-icon--mobile"
                />
              </div>
              <div className="columns is-centered is-marginless is-paddingless">
                <Link to={LOGIN}>
                  <button type="button" className="button is-success">
                    Sign Up!
                  </button>
                </Link>
              </div>
            </div>
            <Onboarding />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Main;
