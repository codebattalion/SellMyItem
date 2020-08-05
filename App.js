import React, { useState, useEffect } from 'react';
import { NavigationContainer, useNavigation } from '@react-navigation/native';
import jwtDecode from 'jwt-decode';
import { AppLoading } from 'expo';

import OfflineNotice from './app/components/OfflineNotice';
import AuthNavigator from './app/navigation/AuthNavigator';
import navigationTheme from './app/navigation/navigationTheme';
import AppNavigator from './app/navigation/AppNavigator';
import AuthContext from './app/auth/context';
import authstorage from './app/auth/storage';

export default function App() {
  const [user, setUser] = useState();
  const [isReady, setIsReady] = useState(false);

  const getTokenAgain = async () => {
    const token = await authstorage.getToken();
    if (!token) return;
    const user = jwtDecode(token);
    setUser(user.user);
  };
  if (!isReady)
    return <AppLoading startAsync={getTokenAgain} onFinish={() => setIsReady(true)} />;

  return (
    <AuthContext.Provider value={{ user, setUser }}>
      <OfflineNotice />
      <NavigationContainer theme={navigationTheme}>
        {user ? <AppNavigator /> : <AuthNavigator />}
      </NavigationContainer>
    </AuthContext.Provider>
  );
}
