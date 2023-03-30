import { StyleSheet, Text, View, TouchableOpacity, Image } from 'react-native'
import React from 'react'
import Courses from '../api/CourseList'

const CourseDetails = ({ navigation, route }) => {

    const id = route.params.courseId
    console.log(id)

    const selectedCourse = Courses.find((element) => {
        return id === element.id
    })

    const results = [];
    return (
        <View style={styles.mainCont}>
            <View style={styles.courseCont}>
                <View>
                    <Image
                        style={styles.cardImage}
                        source={require('../../assets/images/webdev.jpeg')}
                        resizeMode="contain"
                    />
                </View>
                <Text style={styles.mainHeader}>{selectedCourse.title}</Text>
                <Text style={styles.description}>{selectedCourse.description}</Text>
                <Text style={styles.description}>{selectedCourse.courseInclude}</Text>
                <View style={styles.btnCont}>
                    <Text style={styles.price}>&#8377;{selectedCourse.price}</Text>
                    <TouchableOpacity
                        style={styles.btnStyle}
                        onPress={() => navigation.navigate("Course")}
                    >
                        <Text style={styles.btnText}>Join Now</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    )
}

export default CourseDetails

const styles = StyleSheet.create({
    mainCont: {
        paddingHorizontal: 20,
        marginTop: 20,

    },
    courseCont: {
        padding: 30,
        backgroundColor: "rgba(255,255,255,0.90)",
        textAlign: 'center',
        borderRadius: 5,
        shadowColor: 'grey',
        shadowOffset: { width: 0, height: 0 },
        shadowOpacity: 0.5,
        shadowRadius: 8,
        elevation: 8,
    },
    cardImage: {
        width: '100%',
        display: 'flex',
        alignSelf: 'center',
        height: undefined,
        aspectRatio: 1
    },
    mainHeader: {
        fontSize: 22,
        color: '#000',
        textTransform: 'uppercase',
        fontWeight: '500',
        paddingTop: 10,
        textAlign: 'center',
        fontSize: 18,
    },
    description: {
        textAlign: 'center',
        fontSize: 16,
        color: '#7d7d7d',
        paddingBottom: 20,
        lineHeight: 20,
    },
    price: {
        backgroundColor: '#344055',
        color: '#eee',
        paddingVertical: 10,
        paddingHorizontal: 15,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        borderBottomLeftRadius: 1,
        borderTopLeftRadius: 1,
        fontSize: 18,
        textAlign: 'center',
    },
    btnCont: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center'
    },
    btnStyle: {
        backgroundColor: '#00A659',
        borderBottomRightRadius: 5,
        borderTopRightRadius: 5,
        paddingVertical: 10,
        paddingHorizontal: 18,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
    },
    btnText: {
        fontSize: 20,
        color: '#eee',

    }
})