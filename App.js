/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import Navigator from './routes/HomeStack';

import LoginScreen from './screens/LoginScreen';

const App = () => {
  return (
    // <LoginScreen></LoginScreen>
    <Navigator/>
  );
};

export default App;