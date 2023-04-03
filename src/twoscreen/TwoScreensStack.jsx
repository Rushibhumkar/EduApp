import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import Cart from './Cart';
import BookAppoint from './BookAppoint';

const Stack = createNativeStackNavigator();

const TwoScreensStack = () => {
    return (
        <Stack.Navigator
            initialRouteName='Cart'
        >
            <Stack.Screen name="Cart" component={Cart} />
            <Stack.Screen name="BookAppoint" component={BookAppoint} />
        </Stack.Navigator>
    )
}

export default TwoScreensStack

const styles = StyleSheet.create({})