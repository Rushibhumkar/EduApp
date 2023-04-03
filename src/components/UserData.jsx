import { StyleSheet, Text, View, FlatList, Image } from 'react-native'
import React, { useState, useEffect } from 'react'

const UserData = () => {

    const [isLoaded, setIsLoaded] = useState(true)
    const [myData, setMyData] = useState([])

    const getUserData = async () => {
        try {
            const res = await fetch("https://thapatechnical.github.io/userapi/users.json")
            const realData = await res.json();
            setMyData(realData);
            setIsLoaded(false)
        } catch (error) {
            console.log(error);
        }

    }

    useEffect(() => getUserData(), [])

    return (
        <View>
            <Text>UserData</Text>
        </View>
    )
}

export default UserData

const styles = StyleSheet.create({})