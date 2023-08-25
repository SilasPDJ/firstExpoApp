import React from 'react'
import { TouchableOpacity, Text, StyleSheet } from 'react-native'

// onPressIn (vem antes do onPress, quando começa pressionar)vs onPress

// Arrow Function
const MobiButton = ({ title, corBotao, corTexto, funcaoOnPress, children }) => {
  const styles = getStyles()
  return (

    <TouchableOpacity style={styles.button} onPress={funcaoOnPress}>

      <Text style={styles.text}>{children}</Text>
      {/* <Text style={styles.text}>{title}</Text> */}

    </TouchableOpacity>
  )

  // Style
  function getStyles() {
    return StyleSheet.create({
      button: {
        backgroundColor: corBotao,
        padding: 20,
        borderRadius: 30,
        margin: 30,
      },
      text: {
        color: corTexto,
      }
    })
  }
}

export default MobiButton