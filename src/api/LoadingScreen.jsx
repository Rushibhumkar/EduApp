import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const LoadingScreen = () => {
    return (
        <View style={{ backgroundColor: '#fff', flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <Text style={{ color: '#000', fontSize: 22 }}>Loading...</Text>
        </View>
    )
}

export default LoadingScreen

const styles = StyleSheet.create({})