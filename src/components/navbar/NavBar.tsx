import React from 'react';
import { Link } from 'react-router-dom';
import { HOME } from 'constants/routes';
import APP_LOGO from 'assets/images/app.png';
import { useUser } from 'contexts/UserContext';
import './NavBar.scss';
import SideBar from './SideBar';

const NavBar: React.FC = () => {
  const { user } = useUser();
  const [isOpen, setIsOpen] = React.useState(false);
  const { uid } = user;
  return (
    <nav className="navbar bar" role="navigation" aria-label="main navigation">
      <div className="navbar-brand">
        <Link to={HOME} className="navbar-item">
          <div>
            <img src={APP_LOGO} alt="app" width="30" />
          </div>
        </Link>
        {uid !== '' ? (
          <button
            type="button"
            className="navbar-burger burger button bar__menu-icon"
            onClick={() => setIsOpen(true)}
          >
            &#9776;
          </button>
        ) : (
          <></>
        )}
      </div>
      <div className="navbar-menu">
        <div className="navbar-end">
          <div className="navbar-item">
            <div className="buttons">
              {uid !== '' ? (
                <button
                  type="button"
                  className="button bar__menu-icon"
                  onClick={() => setIsOpen(true)}
                >
                  &#9776;
                </button>
              ) : (
                <></>
              )}
            </div>
          </div>
        </div>
      </div>
      <SideBar isOpen={isOpen} setIsOpen={setIsOpen} />
      <button
        type="button"
        aria-label="overlay"
        className={
          isOpen
            ? 'sidenav__overlay'
            : 'sidenav__overlay sidenav__overlay--display'
        }
        onClick={() => setIsOpen(false)}
      />
    </nav>
  );
};

export default NavBar;
