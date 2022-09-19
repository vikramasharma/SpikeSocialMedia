import { useEffect, VFC, useState } from 'react';
import { View, Text, Button } from 'react-native';


// import { LoginContainer } from './LoginContainer';

import { onAuthStateChanged, getAuth } from 'firebase/auth';
import { useSelector } from 'react-redux';
import { setStatusBarNetworkActivityIndicatorVisible } from 'expo-status-bar';
import { useAppDispatch } from '@app/util/hooks';
import { saveUser, logInOut } from '@app/core/store/auth/authSlice';
import { TabStackScreenProp, TabRoutes } from '@navigation/index';
import { selectAuths, selectLogIn } from '@app/core/selectors';
import { handleLogout } from '@app/util/methods/handleLogout';

import { CreateAccountContainer } from './CreatAccountContainer';
import { LoginContainer } from './LoginContainer';
import { LoggedinContainer } from './LoggedinContainer';




export const ProfileScreen: VFC<TabStackScreenProp<TabRoutes.PROFILE>> = () => {
  const [noAccount, setnoAccount] = useState(false);
  const dispatch = useAppDispatch();
  const auth = getAuth();
  const onPressLogout = () => {
    handleLogout();
  };
  const gotoCreateAccount = () => {
    setnoAccount(true);
  };
  const gotoLogIn = () => {
    setnoAccount(false);
  };
  useEffect(() => {
    return onAuthStateChanged(auth, (user) => {
      // console.log(auth);
      if (user) {
        // console.log(user);
        dispatch(saveUser(user.displayName));
        dispatch((logInOut(true)));
        // ...
      }
      else {
        dispatch(saveUser('test'));
        dispatch(logInOut(false));
      }
    });

  }, []);
  const displayName = useSelector(selectAuths);
  const isLoggedIn = useSelector(selectLogIn);

  return (
    <View style={{ flex: 1, justifyContent: 'flex-end', backgroundColor: 'white' }}>
      {isLoggedIn && <LoggedinContainer />}
      {!isLoggedIn && !noAccount && <LoginContainer />}
      {!isLoggedIn && noAccount && <CreateAccountContainer />}
      {!isLoggedIn && !noAccount && (
        <Button
          title='Create Account'
          onPress={ gotoCreateAccount }
          color='#D71E25'
        />
      )}
      {!isLoggedIn && noAccount && (
        <Button
          title='Log In'
          onPress={ gotoLogIn }
          color='#D71E25'
        />
      )}
    </View>
  );
};
