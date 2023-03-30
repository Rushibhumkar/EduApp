import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import Course from '../src/components/Course'
import CourseDetails from '../src/components/CourseDetails'

const Stack = createNativeStackNavigator();

const CourseStack = () => {
    return (
        <Stack.Navigator
            screenOptions={{
                headerShown: true,
                tabBarActiveTintColor: '#fff',
                tabBarInactiveTintColor: 'black',
                tabBarStyle: { backgroundColor: '#00A659', paddingBottom: 8, paddingTop: 4, height: 50 },
                tabBarShowLabel: false,
                headerTitleAlign: 'center',
                headerTintColor: '#fff',
                headerStyle: { backgroundColor: '#00A659' },
            }}
            initialRouteName='Course'
        >
            <Stack.Screen name="Course" component={Course} />
            <Stack.Screen name="CourseDetails" component={CourseDetails} />
        </Stack.Navigator>
    )
}

export default CourseStack

const styles = StyleSheet.create({})