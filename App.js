import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import Screens from './src/Screens';
import Main from './src/Main';
import ServicesMain from './src/Services/main/ServicesMain';
import UseEffectApi from './src/hooks/EffectApi';
import LoadingScreen from './src/api/LoadingScreen';
import UseRefScreen from './src/hooks/UseRefScreen';
const App = () => {
  return (
    <NavigationContainer>
      {/* <Screens /> */}
      {/* <ServicesMain /> */}
      <UseRefScreen />
    </NavigationContainer>
  );
};
const styles = StyleSheet.create({});
export default App;
