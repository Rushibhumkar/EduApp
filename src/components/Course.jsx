import { StyleSheet, Text, View, FlatList, Image, ScrollView, TouchableOpacity } from 'react-native'
import React from 'react'
import Courses from '../api/CourseList'

const Course = ({ navigation }) => {
    const courseCard = ({ item }) => {
        return (
            <View style={styles.mainContainer}>
                <View style={styles.courseContainer}>
                    <View>
                        <Image
                            style={styles.cardImage}
                            source={require('../../assets/images/webdev.jpeg')}
                            resizeMode="contain"
                        />
                    </View>

                    <Text style={styles.mainHeader}>{item.title}</Text>

                    <Text style={styles.description}>{item.description}</Text>

                    <View style={styles.buttonContainer}>
                        <TouchableOpacity
                            style={styles.buttonStyle}
                            onPress={() =>
                                navigation.navigate("CourseDetails", {
                                    courseId: item.id,
                                })
                            }>
                            <Text style={styles.buttonText}> course Details </Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
        );
    };

    return (
        <FlatList
            keyExtractor={(item) => item.id}
            data={Courses}
            renderItem={courseCard}
        />
    );
};

const styles = StyleSheet.create({
    cardImage: {
        width: "100%",
        height: undefined,
        aspectRatio: 1,
    },
    mainContainer: {
        paddingHorizontal: 20,
    },
    courseContainer: {
        padding: 30,
        backgroundColor: "rgba(255, 255, 255, 0.90)",
        textAlign: "center",
        borderRadius: 5,
        shadowColor: "grey",
        shadowOffset: { width: 0, height: 0 },
        shadowOpacity: 0.5,
        shadowRadius: 8,
        elevation: 8,
        marginVertical: 30,
    },
    mainHeader: {
        fontSize: 22,
        color: "#344055",
        textTransform: "uppercase",
        paddingBottom: 15,
        textAlign: "center",
    },
    description: {
        textAlign: "left",
        paddingBottom: 15,
        lineHeight: 20,
        fontSize: 16,
        color: "#7d7d7d",
    },
    buttonContainer: {
        display: "flex",
        flexDirection: "row",
        justifyContent: "center",
    },
    buttonStyle: {
        backgroundColor: "#00A659",
        borderRadius: 5,
        paddingVertical: 10,
        paddingHorizontal: 20,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
    },
    buttonText: {
        fontSize: 20,
        color: "#eee",
        textTransform: "capitalize",
    },
});

export default Course;