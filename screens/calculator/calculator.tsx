import React, { useState, useEffect } from 'react'
import { View } from 'react-native'

import { ResultContainer } from '../../components/result-container';
import { InputContainer } from '../../components/input-container';

export const CalculatorScreen = () => {
  const [resultValue, setResultValue] = useState<any>('0');
  const [operator, setOperator] = useState<string>();
  const [firstValue, setFirstValue] = useState<string>('');
  const [secondValue, setSecondValue] = useState<string>('');
  const [isNextValue, setIsNextValue] = useState<boolean>(false);
  const [isAllowDot, setIsAllowDot] = useState<boolean>(true);
  const [isStart, setIsStart] = useState<boolean>(true);

  const handleInput = (input: string) => {
    switch (input) {
      case '0':
      case '1':
      case '2':
      case '3':
      case '4':
      case '5':
      case '6':
      case '7':
      case '8':
      case '9':
        setResultValue(resultValue === '0'
          ? input
          : isStart ? input : resultValue + input)

          if (!isNextValue) {
            `${firstValue}`.search('.') && setIsAllowDot(true);
            isStart ? setFirstValue(input) : setFirstValue(firstValue + input)
          } else {
            `${secondValue}`.search('.') && setIsAllowDot(true);
            setSecondValue(secondValue + input)
          }

        setIsStart(false);

        break;
      case '+':
      case '-':
      case '×':
      case '÷':
        if (operator && secondValue) return;

        setIsNextValue(true);
        setOperator(input);
        setIsAllowDot(false);
        setResultValue((operator
          ? resultValue.substr(0, resultValue.length - 1)
          : resultValue) + input);
        setIsStart(false);

        break;
      case '+/-':
        if (operator && secondValue) return;

        if (operator !== '+' && operator !== '-') return;

        setIsNextValue(true);
        const substrOperator = operator === '+' ? [2, 2] : [0, 1];
        
        setOperator(input.substr(substrOperator[0], substrOperator[1]));
        setIsAllowDot(false);
        setResultValue((operator
          ? resultValue.substr(0, resultValue.length - 1)
          : resultValue) + input.substr(substrOperator[0], substrOperator[1]));
        setIsStart(false);

        break;
      case '%':
        if(!firstValue) return;
        
        const percentResult = eval(firstValue + '*' + '0.01')

        setResultValue(percentResult % 1 === 0 ? percentResult : percentResult.toFixed(2));
        setFirstValue(percentResult % 1 === 0 ? percentResult : percentResult.toFixed(2));
        setSecondValue('');
        setOperator('');
        setIsNextValue(false);
        setIsStart(true);

        setResultValue(parseInt(firstValue)* 0.01);

        break;
      case '.':

        if(isStart) return;
        
        setIsAllowDot(false);

        if(!isAllowDot) return;

        const dot = resultValue.toString().slice(-1)
        setResultValue(dot !== '.' && isAllowDot
          ? resultValue + input
          : resultValue)

        if (!isNextValue) {
          setFirstValue(firstValue + input)
        } else {
          setSecondValue(secondValue + input)
        }

        break;
      case '=':
        if(!secondValue) return;

        const formatOperator = (operator === '×' ? '*' : (operator === '÷') ? '/' : operator)
        const result = eval(firstValue + formatOperator + secondValue)

        setResultValue(result % 1 === 0 ? result : result.toFixed(2));
        setFirstValue(result % 1 === 0 ? result : result.toFixed(2));
        setSecondValue('');
        setOperator('');
        setIsNextValue(false);
        setIsStart(true);

        break;
      case 'AC': 
      setIsAllowDot(true);
        setResultValue('0')
        setFirstValue('');
        setSecondValue('');
        setIsStart(true);

        break;
    }
  }

  return (
    <View style={{ flex: 1}}>
      <ResultContainer displayValue={resultValue} />
      <InputContainer handleInput={handleInput} />
    </View>
  )
}
