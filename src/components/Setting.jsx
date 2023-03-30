import { StyleSheet, Text, View, TextInput } from 'react-native'
import React from 'react'

const Setting = () => {
    return (
        <View>
            <Text style={{ color: 'black' }}>Setting</Text>
        </View>
    )
}

export default Setting

const styles = StyleSheet.create({
    inputStyle: {
        borderColor: 'black',
        borderWidth: 0.5,
        borderRadius: 8,
        marginHorizontal: 10,
        marginVertical: 10,
        paddingHorizontal: 10
    },

    optionText: {
        color: 'black',
        paddingHorizontal: 10,
        paddingVertical: 5,
    }
})