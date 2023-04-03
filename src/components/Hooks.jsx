import { StyleSheet, Text, View, TouchableOpacity, TextInput, Alert, ScrollView } from 'react-native'
import React, { useState, createContext, useEffect } from 'react'
import Icon from 'react-native-vector-icons/Entypo'
import EmailIcon from 'react-native-vector-icons/Fontisto'

// const Hooks = () => {
//     const myData = [
//         {
//             name: 'rushi',
//             age: 23,
//             email: 'email1@gmail.com'
//         },
//         {
//             name: 'gopal',
//             age: 24,
//             email: 'email2@gmail.com'
//         },
//         {
//             name: 'ram',
//             age: 21,
//             email: 'email3@gmail.com'
//         }
//     ]
//     const [user, setUser] = useState(myData);
//     return (
//         <View>
//             {
//                 user.map((item) => {
//                     return (
//                         <View key={item.name}>
//                             <Text style={{ padding: 10, color: "#fff" }}>Name:{item.name}, Email:{item.email}, Age:{item.age}</Text>
//                         </View>
//                     )
//                 })
//             }
//             <TouchableOpacity
//                 style={{ backgroundColor: "green", alignSelf: 'center' }}
//                 onPress={() => setUser([])}
//             >
//                 <Text style={{ color: '#fff', padding: 10, alignSelf: 'center' }}>Clear</Text>
//             </TouchableOpacity>
//             <TouchableOpacity
//                 style={{ backgroundColor: "green", alignSelf: 'center' }}
//                 onPress={() => setUser(myData)}
//             >
//                 <Text style={{ color: '#fff', padding: 10, alignSelf: 'center' }}>Get Data</Text>
//             </TouchableOpacity>
//         </View>
//     )
// }

// <----------Spread Operator(...)---------->

// const Hooks = () => {
//     const [myObj, setmyObj] = useState({ myName: 'Rushi', age: 22, mobile: 7972755589 })
//     const changeData = () => {
//         setmyObj({ ...myObj, myName: 'Gopal' })
//     }
//     return (
//         <View style={{ backgroundColor: '#fff', flex: 1, justifyContent: 'center', alignItems: 'center' }}>
//             <Text style={{ color: '#000', alignSelf: 'center', marginBottom: 20 }}>Name:{myObj.myName} ,Myage:{myObj.age} , Mobile Number is :{myObj.mobile} </Text>
//             <TouchableOpacity style={{ backgroundColor: 'green', padding: 20, alignSelf: 'center' }}
//                 onPress={() => changeData()}
//             >
//                 <Text style={{ color: '#000', alignSelf: 'center' }}>Update</Text>
//             </TouchableOpacity>
//         </View>
//     )
// }

// <-----------Filter function using with useState------------->

// const Hooks = () => {

//     const myData = [
//         {
//             id: 1, myName: "Rushikesh", myage: 22, mobile: 7972755589
//         },
//         {
//             id: 2, myName: "Gopal", myage: 22, mobile: 7972755589
//         },
//         {
//             id: 3, myName: "Bhumkar", myage: 22, mobile: 7972755589
//         }
//     ]

//     const [myArray, setmyArray] = useState(myData)

//     const removeItem = (id) => {
//         const myNewArray = myArray.filter((item) => {
//             return item.id !== id
//         })
//         setmyArray(myNewArray)
//     }
//     const getAllData = () => {
//         setmyArray(myData);
//     }
//     const removeAllData = () => {
//         setmyArray([]);
//     }

//     return (
//         <View style={{ backgroundColor: '#fff', justifyContent: 'center', flex: 1 }}>
//             {
//                 myArray.map((item) => {
//                     return (
//                         <View key={item.id}>
//                             <View style={{ backgroundColor: 'cyan', marginVertical: 10, marginHorizontal: 40, paddingVertical: 20, paddingHorizontal: 40, borderColor: '#000', borderWidth: 1, borderRadius: 8, display: 'flex', flexDirection: 'row', justifyContent: 'space-between' }}>
//                                 <Text style={{ color: '#000' }}>Name:{item.myName} ,Age :{item.myage} ,Mobile:{item.mobile}</Text>
//                                 <TouchableOpacity style={{ backgroundColor: 'tomato', padding: 4, borderRadius: 4 }}
//                                     onPress={() => removeItem(item.id)}
//                                 >
//                                     <Text style={{ color: '#fff', }}>Remove</Text>
//                                 </TouchableOpacity>

//                             </View>

//                         </View>
//                     )
//                 })
//             }
//             <TouchableOpacity style={{ backgroundColor: 'green', padding: 4, borderRadius: 4, marginHorizontal: 40, marginVertical: 10, }}
//                 onPress={() => getAllData()}
//             >
//                 <Text style={{ color: '#fff', textAlign: 'center' }}>Get All Data</Text>
//             </TouchableOpacity>
//             <TouchableOpacity style={{ backgroundColor: 'red', padding: 4, borderRadius: 4, marginHorizontal: 40, marginVertical: 10, }}
//                 onPress={() => removeAllData()}
//             >
//                 <Text style={{ color: '#fff', textAlign: 'center' }}>Clear All</Text>
//             </TouchableOpacity>
//         </View>
//     )
// }

// <---------Short Circuit Elevation----------->

// const Hooks = () => {
//     const [demo, setdemo] = useState("")
//     return (
//         <View>
//             {/* <Text style={{ color: 'red' }}>{demo || "Main"}</Text> */}
//             <Text style={{ color: 'red' }}>{demo && "Gopal"}</Text>
//         </View>
//     )
// }

// <---------Login Form Advanced--------->

// const Hooks = () => {
//     const [email, setemail] = useState('')
//     const [password, setpassword] = useState('')
//     const [eyeHide, setEyeHide] = useState(false)
//     const [allEntry, setAllEntry] = useState([])

//     const submitForm = () => {
//         if (email && password) {

//             const newEntry = { id: new Date().getTime().toString(), email: email, password: password }
//             setAllEntry([...allEntry, newEntry]);
//             setemail("")
//             setpassword("")
//             console.log(newEntry.id)
//             // console.log(email)
//             // console.log(password)
//         } else {
//             Alert.alert("Plz Fill the data")
//         }

//     }
//     const clearAll = () => {
//         setAllEntry([]);
//     }
//     return (
//         <ScrollView style={{ backgroundColor: '#fff' }}>
//             <View style={{}}>
//                 <Text style={{ marginHorizontal: 25, color: '#000' }}>Email :</Text>
//                 <View
//                     style={{
//                         display: 'flex',
//                         flexDirection: 'row',
//                         justifyContent: 'space-between',
//                         alignItems: 'center',
//                         marginHorizontal: 20,
//                         marginVertical: 10,
//                         borderWidth: 0.5,
//                         borderColor: 'grey',
//                         borderRadius: 8
//                     }}
//                 >
//                     <TextInput
//                         value={email}
//                         // onChange={(text) => setemail(text)}
//                         onChangeText={(text) => setemail(text)}
//                         keyboardType='text'
//                         style={{
//                             color: '#000',
//                             width: '85%',
//                             paddingLeft: 10,
//                         }}
//                     />
//                     <View style={{ width: '15%', borderLeftColor: '#000', borderLeftWidth: 0.4, justifyContent: 'center', alignItems: 'center' }}>
//                         <EmailIcon name='email' size={22} color={'#000'} style={{}} />
//                     </View>
//                 </View>
//                 <Text style={{ marginHorizontal: 25, color: '#000' }}>Password :</Text>
//                 <View style={{
//                     display: 'flex',
//                     flexDirection: 'row',
//                     justifyContent: 'space-between',
//                     alignItems: 'center',
//                     marginHorizontal: 20,
//                     marginVertical: 10,
//                     borderWidth: 0.5,
//                     borderColor: 'grey',
//                     borderRadius: 8
//                 }}>
//                     <TextInput
//                         value={password}
//                         // onChange={(text) => setpassword(text)}
//                         onChangeText={(text) => setpassword(text)}
//                         keyboardType='text'
//                         secureTextEntry={eyeHide === false}
//                         style={{
//                             color: '#000',
//                             width: '85%',
//                             paddingLeft: 10,

//                         }}
//                     />
//                     {
//                         eyeHide ?
//                             <TouchableOpacity
//                                 style={{ justifyContent: 'center', alignItems: 'center', width: '15%', borderLeftColor: '#000', borderLeftWidth: 0.4 }}
//                                 onPress={() => setEyeHide(!eyeHide)} >
//                                 <Icon name="eye" size={22} color="#000" />
//                             </TouchableOpacity>
//                             : <TouchableOpacity
//                                 style={{ justifyContent: 'center', alignItems: 'center', width: '15%', borderLeftColor: '#000', borderLeftWidth: 0.4 }}
//                                 onPress={() => setEyeHide(!eyeHide)} >
//                                 <Icon name="eye-with-line" size={22} color="#000" />
//                             </TouchableOpacity>
//                     }


//                 </View>
//                 <TouchableOpacity style={{ backgroundColor: 'green', borderRadius: 4, marginHorizontal: 40, marginVertical: 10, }}
//                     onPress={() => submitForm()}
//                 >
//                     <Text style={{ color: '#fff', textAlign: 'center', padding: 10 }}>Submit</Text>
//                 </TouchableOpacity>
//                 <TouchableOpacity style={{ backgroundColor: 'cyan', borderRadius: 4, marginHorizontal: 40, marginVertical: 10, }}
//                     onPress={() => clearAll()}
//                 >
//                     <Text style={{ color: '#000', textAlign: 'center', padding: 10 }}>Clear All</Text>
//                 </TouchableOpacity>
//                 <View>
//                     {
//                         allEntry.map((item) => {
//                             const { id, email, password } = item;
//                             return (
//                                 <View style={{ backgroundColor: 'grey', marginVertical: 10, marginHorizontal: 20, borderRadius: 8 }}
//                                     key={id}
//                                 >
//                                     <Text style={{ color: '#000', textAlign: 'center', padding: 10 }}>Email :{email} , Password :{password}</Text>
//                                 </View>
//                             )
//                         })
//                     }
//                 </View>

//             </View>
//         </ScrollView>
//     )
// }

const Hooks = () => {
    useEffect(() => {
        console.log('Hello Useeffect')
    }, [])
    // console.log("Hello Outside")
    return (
        <View style={{ flex: 1, backgroundColor: '#fff' }}>
            <Text style={{ color: '#000' }}>Hello!</Text>
        </View>
    )
}

export default Hooks

const styles = StyleSheet.create({})