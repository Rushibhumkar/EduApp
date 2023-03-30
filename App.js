import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import Screens from './src/Screens';
import Main from './src/Main';
import ServicesMain from './src/Services/main/ServicesMain';
const App = () => {
  return (
    <NavigationContainer>
      {/* <Screens /> */}
      {/* <ServicesMain /> */}
      <Main />
    </NavigationContainer>
  );
};
const styles = StyleSheet.create({});
export default App;
