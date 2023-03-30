import { StyleSheet, Text, View, FlatList, Image, ScrollView, TouchableOpacity } from 'react-native'
import React from 'react'
import Courses from '../api/Course'

const Course = () => {

    return (
        <View>
            <FlatList
                data={Courses}
                keyExtractor={(item) => { item.title }}
                renderItem={({ item }) => {
                    return (
                        <ScrollView>
                            <View style={styles.mainCont} key={item.title}>
                                <View style={styles.CourseCont}>
                                    <Text style={styles.titleText}>{item.title}</Text>
                                    <View style={styles.imgCont}>
                                        <Image style={styles.imgStyle} source={{ uri: item.imageUrl }} />
                                    </View>
                                </View>
                                <TouchableOpacity></TouchableOpacity>
                            </View>
                        </ScrollView>
                    )
                }}
            />
        </View>
    )
}

export default Course

const styles = StyleSheet.create({
    mainCont: {
        backgroundColor: 'yellow',
    },
    CourseCont: {
        marginHorizontal: 30,
        marginVertical: 10,
        backgroundColor: 'pink',
        borderColor: 'black',
        borderWidth: 1
    },
    titleText: {
        textAlign: 'center',
        color: '#000',
        fontSize: 20,
        fontWeight: 'bold',
    },
    imgCont: {
        alignSelf: 'center',
        backgroundColor: '#E6E6E6',
        width: 160,
        height: 120,
        marginVertical: 10,
    }
})