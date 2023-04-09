import { StyleSheet, Text, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import LoadingScreen from './LoadingScreen'

const UseEffectApi = () => {

    const [users, setUsers] = useState([])
    const [loading, setLoading] = useState(true)
    const getUsers = async () => {
        try {
            const response = await fetch('https://api.github.com/users')
            // console.log(response)
            setUsers(await response.json())
        }
        catch (error) {
            console.log(error)
        }

    }
    useEffect(() => {
        getUsers();
    }, [])

    if (loading) {
        return <LoadingScreen />
    }
    return (
        <View style={{ backgroundColor: 'grey', margin: 10, }}>
            {/* <Text style={{ color: '#000', textAlign: 'center' }}>EffectApi</Text> */}
            {
                users.map((item) => {
                    return (
                        <View key={item.id} style={{ backgroundColor: 'yellow', borderWidth: 1, borderColor: 'grey', margin: 10, paddingVertical: 5 }}>
                            <View style={{ display: 'flex', flexDirection: 'column' }}>
                                <Text style={{ color: '#000', textAlign: 'center' }}>{item.login}</Text>
                                <Text style={{ color: '#000', textAlign: 'center' }}>{item.url}</Text>
                                <Text style={{ color: '#000', textAlign: 'center' }}>{item.events_url}</Text>
                            </View>
                        </View>
                    )
                })
            }
        </View>
    )
}

export default UseEffectApi

const styles = StyleSheet.create({})