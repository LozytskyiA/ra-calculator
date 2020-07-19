import React from 'react'
import { StyleSheet, Text, TouchableOpacity, Dimensions } from 'react-native'

interface INumberButton {
  value: string,
  handleOnPress: (value: string) => void,
  backgroundColor?: any,
  width?: any
}

export const NumberButton = (props: INumberButton) => {
  const {value, handleOnPress, backgroundColor, width} = props;

  const handlePressButton = () => handleOnPress(value);

  return (
    <TouchableOpacity 
      style={[styles.numberButtonContainer, {backgroundColor: backgroundColor}, {width: Dimensions.get('window').width * width!}]}
      onPress={handlePressButton}>
      <Text
        style={styles.text}
        >{value}</Text>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  numberButtonContainer: {
    margin: 8,
    justifyContent: 'center',
    alignItems: 'center',
    width: Dimensions.get('window').width * 0.18,
    height: Dimensions.get('window').width * 0.18,
    borderRadius: Math.round(Dimensions.get('window').width + Dimensions.get('window').height) / 2,
  },
  text: {
    color: '#ffffff',
    fontSize: 32
  }
})
