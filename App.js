import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import Screens from './src/Screens';
import Main from './src/Main';
import ServicesMain from './src/Services/main/ServicesMain';
import Hooks from './src/components/Hooks';
import UseEffectApi from './src/api/EffectApi';
const App = () => {
  return (
    <NavigationContainer>
      {/* <Screens /> */}
      {/* <ServicesMain /> */}
      <UseEffectApi />
    </NavigationContainer>
  );
};
const styles = StyleSheet.create({});
export default App;
