import React from 'react';
import firebase from 'utils/firebase';

interface UserState {
  uid: string;
  isVerifying: boolean;
}

interface UserProps {
  user: UserState;
  setUser: React.Dispatch<React.SetStateAction<UserState>>;
}

const defaultUserState: UserState = {
  uid: '',
  isVerifying: true
};

const defaultUserProps: UserProps = {
  user: defaultUserState,
  setUser: (): void => {}
};

const UserContext = React.createContext<UserProps>(defaultUserProps);

const UserProvider: React.FC = props => {
  const [user, setUser] = React.useState({ uid: '', isVerifying: true });

  // https://github.com/facebook/react/issues/15096
  React.useEffect(() => {
    const unSubscribe = firebase.auth().onAuthStateChanged(res => {
      if (res !== null) {
        const { uid } = res;
        setUser({ ...user, uid, isVerifying: false });
      } else {
        setUser({ ...user, isVerifying: false });
      }
    });
    return () => {
      unSubscribe();
    };
    // eslint-disable-next-line
  }, []);

  return (
    <UserContext.Provider
      value={{
        user,
        setUser
      }}
      // eslint-disable-next-line react/jsx-props-no-spreading
      {...props}
    />
  );
};

const useUser = () => {
  const context = React.useContext(UserContext);
  if (context === undefined) {
    throw new Error(`useUser must be used within a UserProvider`);
  }
  return context;
};

export { UserProvider, useUser };
