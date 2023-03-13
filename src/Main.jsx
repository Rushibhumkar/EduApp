import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
// import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/AntDesign';
import Home from './components/Home'
import About from './components/About'
import Contact from './components/Contact'
import Setting from './components/Setting'

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
                    } else if (route.name === 'Setting') {
                        iconName = 'setting';
                    } else if (route.name === 'About') {
                        iconName = 'user';
                    } else if (route.name === 'Contact') {
                        iconName = 'contacts';
                    }

                    return <Ionicons name={iconName} size={size} color={color} />;
                },
                tabBarActiveTintColor: 'tomato',
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
        >
            {/* to use tabbar badge in options user tabBarBadge:notifications.length */}
            <Tab.Screen name="Home" component={Home} options={{ tabBarBadge: 3, tabBarBadgeStyle: { backgroundColor: 'white' } }} />
            <Tab.Screen name="About" component={About} />
            <Tab.Screen name="Contact" component={Contact} />
            <Tab.Screen name="Setting" component={Setting} />
        </Tab.Navigator>
    )
}

export default Main

const styles = StyleSheet.create({})