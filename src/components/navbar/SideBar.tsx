import React from 'react';
import { Link, useHistory } from 'react-router-dom';
import APP_LOGO from 'assets/images/app.png';
import { PROFILE, HOME, TESTIMONIAL, FAQS } from 'constants/routes';
import firebase from 'utils/firebase';

import './SideBar.scss';

interface SideBarProps {
  isOpen: boolean;
  setIsOpen: (isOpen: boolean) => void;
}
const SideBar: React.FC<SideBarProps> = ({ isOpen, setIsOpen }) => {
  const history = useHistory();
  const logout = () => {
    firebase.auth().signOut();
    setIsOpen(false);
    history.push(HOME);
  };
  return (
    <div>
      <div
        className={isOpen ? 'sidenav sidenav__open' : 'sidenav sidenav__close'}
      >
        <img className="sidenav__icon" src={APP_LOGO} alt="app" />
        <Link to={PROFILE} onClick={() => setIsOpen(false)}>
          Dashboard
        </Link>
        <Link to={HOME} onClick={() => setIsOpen(false)}>
          Activities
        </Link>
        <Link to={TESTIMONIAL} onClick={() => setIsOpen(false)}>
          Testimonial
        </Link>
        <Link to={FAQS} onClick={() => setIsOpen(false)}>
          FAQs
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
