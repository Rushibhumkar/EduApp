import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import Icon from 'react-native-vector-icons/AntDesign';
import { useState } from 'react';
import React from 'react'
import services from './data/Services'

const AddService = ({ navigation, route }) => {

    const [isSelected, setIsSelected] = useState(false)

    return (
        <View style={styles.mainCont}>
            <View style={styles.servicesCont}>
                {
                    setIsSelected ? <Text>{services.serviceName}</Text> : ''
                }
                {

                    services.map((item) => {
                        return (
                            <View style={[styles.oneService]}
                                key={item.index}
                            >
                                <TouchableOpacity style={styles.click}
                                    onPress={() => setIsSelected}
                                >
                                    <Text style={styles.text}>{item.serviceName}</Text>
                                    <Icon name='plus' size={20} color='black' style={styles.iconStyle} />
                                </TouchableOpacity>
                            </View>
                        )
                    })


                }

            </View>
        </View >
    )
}

export default AddService

const styles = StyleSheet.create({
    oneService: {
        backgroundColor: '#C19CFF',
        borderColor: 'black',
        borderWidth: 0.5,
        borderRadius: 8,
        flexWrap: 'wrap',
        paddingHorizontal: 15,
        paddingVertical: 6,
        marginVertical: 4,
        marginHorizontal: 10,

    },
    click: {
        display: 'flex',
        justifyContent: 'space-between',
        flexDirection: 'row',
    },
    text: {
        color: 'black',
        fontSize: 14,
    }
})