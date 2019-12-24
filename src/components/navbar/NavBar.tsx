import React from 'react';
import { Link } from 'react-router-dom';
import { HOME } from 'constants/routes';
import REACT_LOGO from 'assets/images/react.png';

import './NavBar.scss';

const NavBar: React.FC = () => {
  return (
    <nav
      className="navbar navigationbar"
      role="navigation"
      aria-label="main navigation"
    >
      <div className="navbar-start">
        <Link to={HOME}>
          <img src={REACT_LOGO} alt="react" width="50" />
        </Link>
      </div>
    </nav>
  );
};

export default NavBar;
