import React from 'react'
import { StyleSheet, Text, View, Dimensions } from 'react-native'

interface IResultContainer {
  displayValue: string
}

export const ResultContainer = (props: IResultContainer) => {
  const { displayValue } = props;

  return (
    <View style={styles.resultContainer}>
      <Text style={styles.resultText}>{displayValue}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  resultContainer: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'flex-end',
    backgroundColor: '#000000',
    paddingRight: Dimensions.get('window').width * 0.1
  },
  resultText: {
    color: '#ffffff',
    fontSize: 80
  }
})
