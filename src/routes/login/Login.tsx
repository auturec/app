import React from 'react';
import { useToasts } from 'react-toast-notifications';
import firebase, { auth, googleProvider } from 'utils/firebase';
import Header from './Header';
import './Login.scss';

const Login: React.FC = () => {
  const { addToast } = useToasts();
  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');
  const [
    isEmailAndPasswordButtonLoading,
    setIsEmailAndPasswordButtonLoading
  ] = React.useState(false);
  const [isGoogleButtonLoading, setIsGoogleButtonLoading] = React.useState(
    false
  );

  const handleSuccessfulLogin = () => {
    addToast('Login Successful!', { appearance: 'success', autoDismiss: true });
    setIsGoogleButtonLoading(false);
  };

  const handleUnsuccessfulLogin = () => {
    addToast('Login Unsuccessful!', { appearance: 'error', autoDismiss: true });
    setIsGoogleButtonLoading(false);
  };

  const googleLogin = () => {
    setIsGoogleButtonLoading(true);
    auth
      .signInWithPopup(googleProvider)
      .then(result => {
        if (result.user !== null) {
          handleSuccessfulLogin();
        } else {
          handleUnsuccessfulLogin();
        }
      })
      .catch(() => {
        handleUnsuccessfulLogin();
      });
  };

  const emailAndPasswordLogin = () => {
    setIsEmailAndPasswordButtonLoading(true);
    firebase
      .auth()
      .signInWithEmailAndPassword(email, password)
      .then(result => {
        const { user } = result;
        if (user !== null) {
          handleSuccessfulLogin();
        } else {
          handleUnsuccessfulLogin();
        }
      })
      .catch(() => {
        handleUnsuccessfulLogin();
      });
    setIsEmailAndPasswordButtonLoading(false);
  };

  return (
    <div className="columns is-centered is-marginless">
      <div className="column is-two-thirds">
        <div className="login__box">
          <div className="login__box--wrapper">
            <div className="columns">
              <div className="column">
                <Header />
              </div>
              <div className="column">
                <div className="login__box--form">
                  <div className="field">
                    <div className="control">
                      <input
                        className="input is-primary"
                        type="text"
                        placeholder="Email"
                        value={email}
                        onChange={e => setEmail(e.target.value)}
                      />
                    </div>
                  </div>
                  <div className="field">
                    <div className="control">
                      <input
                        className="input is-primary"
                        type="password"
                        placeholder="Password"
                        value={password}
                        onChange={e => setPassword(e.target.value)}
                      />
                    </div>
                  </div>
                  <button
                    type="button"
                    className={
                      isEmailAndPasswordButtonLoading
                        ? 'is-loading button is-fullwidth login__box--social'
                        : 'button is-fullwidth login__box--social'
                    }
                    onClick={emailAndPasswordLogin}
                  >
                    Login
                  </button>
                </div>
                <div className="login__box--divider" />
                <button
                  type="button"
                  className={
                    isGoogleButtonLoading
                      ? 'is-loading button is-fullwidth login__box--social'
                      : 'button is-fullwidth login__box--social'
                  }
                  onClick={googleLogin}
                >
                  <img
                    className="login__box--google-icon"
                    src="https://upload.wikimedia.org/wikipedia/commons/5/53/Google_%22G%22_Logo.svg"
                    alt="google"
                    width="20"
                  />
                  Login With Google
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
