import React from 'react';
import { useHistory } from 'react-router-dom';
import { LOGIN } from 'constants/routes';
import './Main.scss';

const Main: React.FC = () => {
  const history = useHistory();
  const handleLogin = () => {
    history.push(LOGIN);
  };

  return (
    <div className="columns is-centered is-marginless">
      <div className="column is-two-thirds">
        <div className="login__box">
          <div className="login__box--wrapper">
            This is the main page
            <button type="button" className="button" onClick={handleLogin}>
              Go to Login
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Main;
