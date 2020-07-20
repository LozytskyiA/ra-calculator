import React from 'react'
import { StyleSheet, View } from 'react-native'

import { NumberButton } from '../number-button/number-button';

import { calculator, colors } from '../../constants/calculator';
interface IInputContainer {
  handleInput: (value: string) => void
}

export const InputContainer = (props: IInputContainer) => { 
  const { handleInput }  = props;
  const handleClassName = (btnIndex: number, index: number, className: string) => {
    switch (className) {
      case 'bg':
        if (btnIndex === 2 && index === 4 || btnIndex === 3 ) {
          return colors.ORANGE;
        } else if ([0, 1, 2].includes(btnIndex) && index === 0) {
          return colors.GRAY;
        } else {
            return colors.DARK_GRAY;
        }
      case 'width':
        if (btnIndex === 0 && index === 4){
          return calculator.BIG_BTN
        } else {
          return calculator.SMALL_BTN
        }
      }
    }

  const renderButtons = () => {
    return calculator.BUTTONS.map((buttonRows, index) => {
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
    backgroundColor: colors.CALCULATOR_BG,
    justifyContent: 'flex-end',
    paddingBottom: 30
  },
  inputRow: {
    flexDirection: 'row',
    justifyContent: 'center',
  }
})
