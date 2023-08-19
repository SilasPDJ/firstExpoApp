import React from 'react'
import { TouchableOpacity, Text, StyleSheet } from 'react-native'

// Arrow Function
const MobiButton = ({ title, cor, funcaoOnPress, children }) => {
  return (

    <TouchableOpacity style={styles.button} onPress={funcaoOnPress}>

      <Text style={styles.text}>{children}</Text>
      {/* <Text style={styles.text}>{title}</Text> */}

    </TouchableOpacity>
  )
}

// Style
const styles = StyleSheet.create({
  button: {
    backgroundColor: "green",
    padding: 20,
    borderRadius: 30,
    margin: 30,
  },
  text: {
    color: "white",
  }
})
export default MobiButton