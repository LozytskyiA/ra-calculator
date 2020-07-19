import React from 'react'
import { StyleSheet, View } from 'react-native'

import { NumberButton } from '../number-button/number-button';

import { BUTTONS } from '../../constants/calculator';

interface IInputContainer {
  handleInput: (value: string) => void
}

export const InputContainer = (props: IInputContainer) => { 
  const { handleInput }  = props;
  const handleClassName = (btnIndex: number, index: number, className: string) => {
    switch (className) {
      case 'bg':
        if (btnIndex === 2 && index === 4 || btnIndex === 3 ) {
          return '#ff9500';
        } else if ([0, 1, 2].includes(btnIndex) && index === 0) {
          return '#a3a3a4'
        } else {
            return '#363636'
        }
      case 'width':
        if (btnIndex === 0 && index === 4){
          return 0.40
        } else {
          return 0.18
        }
      }
    }

  const renderButtons = () => {
    return BUTTONS.map((buttonRows, index) => {
      const rowItem = buttonRows.map((buttons, buttonIndex) => {
        return <NumberButton
          key={buttons + `${buttonIndex}`}
          value={buttons}
          handleOnPress={handleInput}
          backgroundColor={handleClassName(buttonIndex, index, 'bg')}
          width={handleClassName(buttonIndex, index, 'width')}
        />
      });

      return (
        <View 
          style={styles.inputRow}
          key={rowItem + `${index}`}>
          {rowItem}
        </View>
      )
    });
  }

  return (
    <View style={styles.inputContainer}>{renderButtons()}</View>
  )
}

const styles = StyleSheet.create({
  inputContainer: {
    backgroundColor: '#000000',
    justifyContent: 'flex-end',
    paddingBottom: 30
  },
  inputRow: {
    flexDirection: 'row',
    justifyContent: 'center',
  }
})
