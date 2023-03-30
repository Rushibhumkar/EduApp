import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
// import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/AntDesign';
import Home from './components/Home'
import About from './components/About'
import Contact from './components/Contact'
import UserData from './components/UserData'
import CourseStack from './CourseStack';

// const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

const Main = () => {
    return (
        <Tab.Navigator
            screenOptions={({ route }) => ({
                tabBarIcon: ({ focused, color, size }) => {
                    let iconName;
                    if (route.name === 'Home') {
                        iconName = 'home'
                        // focused
                        // ? 'home'
                        // : 'home';
                    } else if (route.name === 'Course') {
                        iconName = 'book';
                    } else if (route.name === 'UserData') {
                        iconName = 'user';
                    } else if (route.name === 'About') {
                        iconName = 'infocirlceo';
                    } else if (route.name === 'Contact') {
                        iconName = 'contacts';
                    }

                    return <Ionicons name={iconName} size={size} color={color} />;
                },
                tabBarActiveTintColor: '#fff',
                tabBarInactiveTintColor: 'black',
                // tabBarBackgroundColor: 'pink',
                // tabBarActiveBackgroundColor: 'yellow',
                // tabBarInactiveBackgroundColor: 'cyan',
                tabBarStyle: { backgroundColor: '#00A659', paddingBottom: 8, paddingTop: 4, height: 50 },
                tabBarShowLabel: false,
                headerTitleAlign: 'center',
                headerTintColor: '#fff',
                headerStyle: { backgroundColor: '#00A659' },
                tabBarHideOnKeyboard: true,

            })}
            initialRouteName="Home"
        >
            {/* to use tabbar badge in options user tabBarBadge:notifications.length */}
            <Tab.Screen name="Home" component={Home} options={{ tabBarBadge: 3, tabBarBadgeStyle: { backgroundColor: '#646464' } }} />
            <Tab.Screen name="Course" component={CourseStack}
                options={{
                    headerShown: false,
                }}
            />
            <Tab.Screen name="UserData" component={UserData} />
            <Tab.Screen name="About" component={About} />
            <Tab.Screen name="Contact" component={Contact} />
        </Tab.Navigator>
    )
}

export default Main

const styles = StyleSheet.create({})