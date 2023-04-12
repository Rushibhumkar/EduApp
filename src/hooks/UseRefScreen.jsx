import { StyleSheet, Text, View, TouchableOpacity, TextInput } from 'react-native'
import React, { useRef, useState, useEffect } from 'react'

// const UseRefScreen = () => {
//   const firstName = "Rushikesh";
//   // const [myName, setmyName] = useState(firstName)
//   const [show, setShow] = useState(false)
//   const myName = useRef(null)

//   const submitForm = (e) => {
//     e.preventDefault();
//     const name = myName.current.value;
//     name === "" ? alert.Alert("Plz Fill Data") : setShow(true)
//     // const { onSubmit } = this.props;
//     console.log(myName.current.value)
//   }
//   return (
//     <View style={{ flex: 1 }}>
//       <Text style={{ fontSize: 20, color: '#000', textAlign: 'center' }}>UseRefScreen</Text>
//       <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', margin: 20 }}>
//         <View style={{ borderColor: 'grey', borderWidth: 0.8, width: '100%', borderRadius: 8, paddingLeft: 8 }}>
//           <TextInput
//             style={{ fontSize: 20 }}
//             placeholderTextColor={'#000'}
//             ref={myName}
//           // value={myName}
//           // onChangeText={() => setmyName()}
//           />
//         </View>
//         <TouchableOpacity style={{ borderColor: 'grey', borderWidth: 0.8, padding: 10, borderRadius: 8, backgroundColor: '#295', marginTop: 10 }}
//           onPress={submitForm}
//         >
//           <Text style={{ fontSize: 20, color: '#fff', textAlign: 'center' }}>Submit</Text>
//         </TouchableOpacity>
//       </View>
//       <Text>{show ? `${myName.current.value}` : ""}</Text>
//     </View>
//   )
// }
// export default UseRefScreen

// const UseRefScreen = () => {

//   const intervalRef = useRef();
//   const [count, setCount] = useState(0)

//   useEffect(() => {
//     intervalRef.current = setInterval(
//       () => setCount((count) => count + 1), 1000
//     )
//     return () => {
//       clearInterval(intervalRef.current)
//     }
//   }, [])

//   return (
//     <View style={{ flex: 1 }}>
//       <View>
//         <Text style={{ fontSize: 24, textAlign: 'center' }}>{count}</Text>
//         <TouchableOpacity
//           onPress={clearInterval(intervalRef.current)}
//           style={{ backgroundColor: '#292', alignSelf: 'center', borderRadius: 10 }}
//         ><Text style={{ color: "#fff", textAlign: 'center', fontSize: 24, padding: 10 }}>Stop</Text></TouchableOpacity>
//       </View>
//     </View>
//   )
// }

// const useInterval = (callback, delay) => {
//   const savedCallback = useRef()

//   // Remember the latest callback.
//   useEffect(() => {
//     savedCallback.current = callback
//   }, [callback])

//   // Set up the interval.
//   useEffect(() => {
//     if (delay !== null) {
//       let id = setInterval(() => {
//         savedCallback.current()
//       }, delay)
//       return () => clearInterval(id)
//     } 
//   }, [delay])
// }

// const UseRefScreen = () => {
//   const [count, setCount] = useState(0)

//   useInterval(() => {
//     setCount(count + 1)
//   }, 3000)

//   return <Text style={{ fontSize: 120 }}>{count}</Text>
// }

const UseRefScreen = () => {

  const constructor = () => {
    super();

    this.state = { currentTime: null, currentDay: null }
    this.daysArray = ['sunday', 'monday', 'tuesday', 'wednesday', 'thursday', 'friday', 'saturday', 'sunday'];
  }

  const componentWillMount = () => {
    this.getCurrentTime();
  }

  getCurrentTime = () => {
    let hour = new Date().getHours();
    let minutes = new Date().getMinutes();
    let seconds = new Date().getSeconds();
    let am_pm = 'pm';

    if (minutes < 10) {
      minutes = '0' + minutes;
    }

    if (seconds < 10) {
      seconds = '0' + seconds;
    }

    if (hour > 12) {
      hour = hour - 12;
    }

    if (hour == 0) {
      hour = 12;
    }

    if (new Date().getHours() < 12) {
      am_pm = 'am';
    }

    this.setState({ currentTime: hour + ':' + minutes + ':' + seconds + ' ' + am_pm });

    this.daysArray.map((item, key) => {
      if (key == new Date().getDay()) {
        this.setState({ currentDay: item.toUpperCase() });
      }
    })
  }

  const componentWillUnmount = () => {
    clearInterval(this.timer);
  }

  const componentDidMount = () => {
    this.timer = setInterval(() => {
      this.getCurrentTime();
    }, 1000);
  }



  return (
    <View style={styles.container}>
      <View>
        <Text style={styles.daysText}>{this.state.currentDay}</Text>
        <Text style={styles.timeText}>{this.state.currentTime}</Text>
      </View>
    </View>
  );

}

const styles = StyleSheet.create(
  {
    container: {
      flex: 1,
      paddingTop: (Platform.OS === 'ios') ? 20 : 0,
      justifyContent: 'center',
      alignItems: 'center',
    },
    headerText: {
      fontSize: 30,
      textAlign: "center",
      margin: 10,
      color: 'black',
      fontWeight: "bold"
    },
    timeText: {
      fontSize: 50,
      color: '#f44336'
    },
    daysText: {
      color: '#2196f3',
      fontSize: 25,
      paddingBottom: 0
    }

  });

export default UseRefScreen;