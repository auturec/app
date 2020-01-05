import React from 'react';
import { Link } from 'react-router-dom';
import APP_LOGO from 'assets/images/app.png';
import { HOME, PROFILE } from 'constants/routes';
import firebase from 'utils/firebase';

import './SideBar.scss';

interface SideBarProps {
  isOpen: boolean;
  setIsOpen: (isOpen: boolean) => void;
}
const SideBar: React.FC<SideBarProps> = ({ isOpen, setIsOpen }) => {
  const logout = () => {
    firebase.auth().signOut();
  };
  return (
    <div>
      <div
        className={isOpen ? 'sidenav sidenav__open' : 'sidenav sidenav__close'}
      >
        <img className="sidenav__icon" src={APP_LOGO} alt="app" />
        <Link to={HOME} onClick={() => setIsOpen(false)}>
          Dashboard
        </Link>
        <Link to={PROFILE} onClick={() => setIsOpen(false)}>
          Profile
        </Link>
        <div className="sidenav__divider" />
        <button
          type="button"
          className="sidenav__logout is-fullwidth button"
          onClick={logout}
        >
          Logout
        </button>
      </div>
    </div>
  );
};
export default SideBar;
