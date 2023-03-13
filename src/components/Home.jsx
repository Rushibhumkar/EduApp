import { StyleSheet, Text, View, TextInput, Image } from 'react-native'
import React from 'react'

const Home = () => {
    return (
        <View style={{ flex: 1 }}>
            <View style={[styles.container]}>
                <View style={styles.imgCont}>
                    <Image source={require('../images/compboy2.jpg')} style={styles.imgStyle} />
                </View>
                <View style={styles.textArea}>
                    <Text style={styles.heading}>Welcome To</Text>
                    <Text style={styles.brandName}>CodePath</Text>
                </View>
                <Text style={styles.description}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem, debitis numquam omnis quia rem vitae sequi alias pariatur maiores ea?</Text>
            </View>
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
        marginBottom: 10,
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
    }
})