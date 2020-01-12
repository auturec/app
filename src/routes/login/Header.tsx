import React from 'react';
import APP_LOGO from 'assets/images/app.png';

import './Login.scss';

const Header: React.FC = () => {
  return (
    <div>
      <img
        src={APP_LOGO}
        alt="react"
        width="100"
        className="login__box--icon"
      />
      <div className="login__box--org-name">Asturec</div>
    </div>
  );
};

export default Header;
