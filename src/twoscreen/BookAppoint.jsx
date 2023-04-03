import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'

const BookAppoint = () => {

    const [isSelected, setSelection] = useState(0);

    return (
        <View style={{ flex: 1 }}>
            <View style={styles.selectCont}>
                <TouchableOpacity style={[styles.btn, { backgroundColor: isSelected === 1 ? '#5E5FEF' : '#fff' }]}
                    onPress={() => setSelection(1)}

                >
                    <Text style={[styles.selectTxt, { color: isSelected === 1 ? '#fff' : '#000' }]}>Pick-Up My Vehicle</Text>
                </TouchableOpacity>
                <TouchableOpacity style={[styles.btn, { backgroundColor: isSelected === 2 ? '#5E5FEF' : '#fff' }]}
                    onPress={() => setSelection(2)}

                >
                    <Text style={[styles.selectTxt, { color: isSelected === 2 ? '#fff' : '#000' }]}>Drop My Vehicle</Text>
                </TouchableOpacity>
                <TouchableOpacity style={[styles.btn, { backgroundColor: isSelected === 3 ? '#5E5FEF' : '#fff' }]}
                    onPress={() => setSelection(3)}

                >
                    <Text style={[styles.selectTxt, { color: isSelected === 3 ? '#fff' : '#000' }]}>Both Pick-Up and Drop</Text>
                </TouchableOpacity>
                <TouchableOpacity style={[styles.btn, { backgroundColor: isSelected === 4 ? '#5E5FEF' : '#fff' }]}
                    onPress={() => setSelection(4)}

                >
                    <Text style={[styles.selectTxt, { color: isSelected === 4 ? '#fff' : '#000' }]}>I Prefer to Drive</Text>
                </TouchableOpacity>
            </View>
            <TouchableOpacity style={{ justifyContent: 'center', alignItems: 'center', marginVertical: 50, }}
            // onPress={() => navigation.navigate('BookAppoint')}
            >
                <Text style={{ color: '#5E5FEF', borderWidth: 1.8, borderColor: '#5E5FEF', fontSize: 20, paddingHorizontal: 40, paddingVertical: 8, borderRadius: 20 }}>Continue</Text>
            </TouchableOpacity>

        </View>
    )
}

export default BookAppoint

const styles = StyleSheet.create({
    selectCont: {
        flexDirection: 'column',
        marginVertical: 30,
        marginBottom: 20,
        marginHorizontal: 10,
    },
    btn: {
        borderWidth: 2,
        margin: 10,
        paddingHorizontal: 10,
        paddingVertical: 6,
        borderRadius: 10,
        borderColor: '#5E5FEF'
    },
    selectTxt: {
        paddingLeft: 10,
        paddingVertical: 4,
        fontSize: 18,
        fontWeight: 'bold'
    }
})