import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import Screens from './src/Screens';
import Main from './src/Main';

const App = () => {
  return (
    <NavigationContainer>
      {/* <Screens /> */}
      <Main />
    </NavigationContainer>
  );
};

export default App;

const styles = StyleSheet.create({});
