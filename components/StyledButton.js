// # COMP 4521    #  Albert Paredandan        20373300          aparedandan@connect.ust.hk
import * as React from 'react'
import { StyleSheet, TouchableOpacity, Text } from 'react-native'

import Colors from '../constants/Colors'

const StyledButton = props => {
  return (
    <TouchableOpacity style={styles.container} onPress={props.customClick}>
      <Text style={styles.text}>{props.label}</Text>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  container: {
    width: '80%',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 4,
    backgroundColor: Colors.currentLine,
    padding: 8
  },
  text: {
    textAlign: 'center',
    height: 20,
    color: Colors.foreground
  }
})

export default StyledButton
