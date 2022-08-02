/**
 * @format
 */
import React from 'react';
import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';
console.disableYellowBox = true;
import {RequestProvider} from './components/context/request-context';

const Root = () => (
  <RequestProvider>
    <App />
  </RequestProvider>
);

AppRegistry.registerComponent(appName, () => Root);
