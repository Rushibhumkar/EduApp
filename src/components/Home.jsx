import { StyleSheet, Text, View, TextInput, Image, TouchableOpacity, Linking } from 'react-native'
import React from 'react'
import About from "./About"

const Home = () => {
    return (
        <View style={{ flex: 1, backgroundColor: '#fff' }}>
            <View style={[styles.container]}>
                <View style={styles.imgCont}>
                    <Image source={{ uri: 'https://www.shutterstock.com/image-photo/indian-male-syudent-kid-studying-260nw-1864285123.jpg' }} style={styles.imgStyle} />
                </View>
                <View style={styles.textArea}>
                    <Text style={styles.heading}>Welcome To</Text>
                    <Text style={styles.brandName}>CodePath</Text>
                </View>
                <Text style={styles.description}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem, debitis numquam omnis quia rem vitae sequi alias pariatur maiores ea?</Text>
            </View>
            {/* <TouchableOpacity style={styles.btn}
                onPress={() => Linking.openURL('app://PhonePe')}
            >
                <Text style={{ textAlign: 'center', color: '#fff', fontSize: 16, padding: 10 }}>Open App</Text>
            </TouchableOpacity> */}
        </View>
    )
}

export default Home

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white',
        justifyContent: 'center',
        alignItems: 'center',
    },
    heading: {
        color: '#000C5C',
        fontSize: 20,
        fontWeight: 'bold',
        textAlign: 'center',
        textTransform: 'uppercase',
    },
    brandName: {
        color: 'blue',
        fontSize: 20,
        textTransform: 'uppercase',
        fontWeight: 'bold',
        textAlign: 'center'
    },
    imgCont: {
        marginHorizontal: 40,
        marginBottom: 20,
        backgroundColor: '#E6E6E6',
        borderRadius: 8,
        shadowColor: 'green',
        shadowOffset: { width: 2, height: 2 },
        shadowOpacity: 1,
        shadowRadius: 6,
        elevation: 8,

    },
    imgStyle: {
        width: '100%',
        height: undefined,
        aspectRatio: 1,
        borderRadius: 8,

    },
    description: {
        color: 'black',
        marginTop: 10,
        marginHorizontal: 40,
        lineHeight: 20,
        letterSpacing: 0.5
    },
    // btn: {
    //     backgroundColor: '#00A659',
    //     marginVertical: 20,
    //     width: '30%',
    //     alignSelf: 'center',
    //     borderRadius: 10
    // }
})