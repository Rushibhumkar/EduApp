import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import AddService from '../AddService'
import BookAppoint from '../BookAppoint'
import DetectMyLoc from '../DetectMyLoc'
import ScheduleService from '../ScheduleService'

const Stack = createStackNavigator();

const ServicesMain = () => {
    return (
        <Stack.Navigator
            screenOptions={{
                tabBarActiveTintColor: 'tomato',
                tabBarInactiveTintColor: 'black',
                // tabBarBackgroundColor: 'pink',
                // tabBarActiveBackgroundColor: 'yellow',
                // tabBarInactiveBackgroundColor: 'cyan',
                // tabBarShowLabel: false,
                headerTitleAlign: 'center',
                headerTintColor: '#fff',
                headerStyle: { backgroundColor: '#5D5FEF' },
            }}

        >
            <Stack.Screen name="AddServices" component={AddService} />
            <Stack.Screen name="BookAppoint" component={BookAppoint} />
            <Stack.Screen name="DetectMyLoc" component={DetectMyLoc} />
            <Stack.Screen name="ScheduleService" component={ScheduleService} />
        </Stack.Navigator>

    )
}

export default ServicesMain

const styles = StyleSheet.create({})