import React, { useState } from 'react';
import './Calculator.css';
import Display from './Display';
import Button from './Button';

const Calculator = () => {
  const [display, setDisplay] = useState('0');
  const [previousValue, setPreviousValue] = useState(null);
  const [operation, setOperation] = useState(null);
  const [waitingForOperand, setWaitingForOperand] = useState(false);

  const clearDisplay = () => {
    setDisplay('0');
    setPreviousValue(null);
    setOperation(null);
    setWaitingForOperand(false);
  };

  const inputDigit = (digit) => {
    if (waitingForOperand) {
      setDisplay(String(digit));
      setWaitingForOperand(false);
    } else {
      setDisplay(display === '0' ? String(digit) : display + digit);
    }
  };

  const inputDecimal = () => {
    if (waitingForOperand) {
      setDisplay('0.');
      setWaitingForOperand(false);
      return;
    }

    if (display.indexOf('.') === -1) {
      setDisplay(display + '.');
    }
  };

  const toggleSign = () => {
    const newValue = parseFloat(display) * -1;
    setDisplay(String(newValue));
  };

  const inputPercent = () => {
    const currentValue = parseFloat(display);
    const newValue = currentValue / 100;
    setDisplay(String(newValue));
  };

  const performOperation = (nextOperation) => {
    const inputValue = parseFloat(display);

    if (previousValue === null) {
      setPreviousValue(inputValue);
    } else if (operation) {
      const currentValue = previousValue ?? 0;

      let newValue;
      switch (operation) {
        case '+': newValue = currentValue + inputValue; break;
        case '-': newValue = currentValue - inputValue; break;
        case '×': newValue = currentValue * inputValue; break;
        case '÷': newValue = currentValue / inputValue; break;
        default:  newValue = inputValue;
      }

      setPreviousValue(newValue);
      setDisplay(String(newValue));
    }

    setWaitingForOperand(true);
    setOperation(nextOperation);
  };

  return (
    <div className="calculator">
      <Display value={display} />
      <div className="calculator-keypad">
        <div className="input-keys">
          <div className="function-keys">
            <Button className="key-clear" onClick={() => clearDisplay()}>
              C
            </Button>
            <Button className="key-sign" onClick={() => toggleSign()}>
              ±
            </Button>
            <Button className="key-percent" onClick={() => inputPercent()}>
              %
            </Button>
          </div>
          <div className="digit-keys">
            <Button className="key-0" onClick={() => inputDigit(0)}>
              0
            </Button>
            <Button className="key-dot" onClick={() => inputDecimal()}>
              .
            </Button>
            <Button className="key-1" onClick={() => inputDigit(1)}>
              1
            </Button>
            <Button className="key-2" onClick={() => inputDigit(2)}>
              2
            </Button>
            <Button className="key-3" onClick={() => inputDigit(3)}>
              3
            </Button>
            <Button className="key-4" onClick={() => inputDigit(4)}>
              4
            </Button>
            <Button className="key-5" onClick={() => inputDigit(5)}>
              5
            </Button>
            <Button className="key-6" onClick={() => inputDigit(6)}>
              6
            </Button>
            <Button className="key-7" onClick={() => inputDigit(7)}>
              7
            </Button>
            <Button className="key-8" onClick={() => inputDigit(8)}>
              8
            </Button>
            <Button className="key-9" onClick={() => inputDigit(9)}>
              9
            </Button>
          </div>
        </div>
        <div className="operator-keys">
          <Button className="key-divide" onClick={() => performOperation('÷')}>
            ÷
          </Button>
          <Button className="key-multiply" onClick={() => performOperation('×')}>
            ×
          </Button>
          <Button className="key-subtract" onClick={() => performOperation('-')}>
            −
          </Button>
          <Button className="key-add" onClick={() => performOperation('+')}>
            +
          </Button>
          <Button className="key-equals" onClick={() => performOperation('=')}>
            =
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Calculator;