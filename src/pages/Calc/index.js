import React, { useState } from 'react';
import * as math from 'mathjs';

import { Button, Input, Divider } from 'components';

const Calc = () => {
  const [ops] = useState([
    ['0', '1', '2'],
    ['3', '4', '5'],
    ['6', '7', '8'],
    ['', '9', ''],
  ]);

  const [inputValue, setInputValue] = useState('');
  const [firstVal, setFirstVal] = useState('');
  const [secondVal, setSecondVal] = useState('');
  const [operator, setOperator] = useState('');
  const [result, setResult] = useState('');

  const regex1 = new RegExp(/^\d+$/);
  const regex2 = new RegExp(/^\d+[+-]$/);
  const regex3 = new RegExp(/^\d+[+-]\d+$/);

  const handleClick = (value) => {
    if (result) {
      setFirstVal('');
      setSecondVal('');
      setOperator('');
      setResult('');
      setInputValue('');
    }

    if (value === '=' && regex3.test(inputValue)) {
      setResult(math.evaluate(inputValue));
    }

    let temp = result ? '' : inputValue + value;

    if (regex1.test(temp) || regex2.test(temp) || regex3.test(temp)) {
      setInputValue(temp);
      const values = temp.split('+').join(',').split('-').join(',').split(',');
      setFirstVal(values[0] ? Number(values[0]).toString() : '');
      setSecondVal(values[1] ? Number(values[1]).toString() : '');

      if (value === '+' || value === '-') {
        setOperator(value);
      }
    }
  };

  const renderButtons = () => {
    return ops.map((row) => {
      return (
        <div key={row} className='row'>
          {row.map((digit, index) => {
            return (
              <Button
                className={
                  digit ? `button-wrapper button-num` : 'empty-button-wrapper'
                }
                key={index}
                handleClick={() => handleClick(digit)}
              >
                {digit}
              </Button>
            );
          })}
        </div>
      );
    });
  };

  return (
    <div className='app'>
      <h1 className='title'>Suzy's Calculator</h1>

      <div className='white-box'>
        <div className='input-group'>
          <Input className='input input-num' value={firstVal} />
          <Input className='input input-operator' value={operator} />
          <Input className='input input-num' value={secondVal} />
          <Input
            className='input input-operator no-border-input-operator'
            value='='
          />
          <Input className='input input-num' value={result} />
        </div>

        <Divider />

        {renderButtons()}

        <Divider />

        <div className='row'>
          <Button
            className='button-wrapper addon-operator'
            handleClick={() => handleClick('+')}
          >
            +
          </Button>
          <Button
            className='button-wrapper subtraction-operator'
            handleClick={() => handleClick('-')}
          >
            -
          </Button>
        </div>

        <div className='row'>
          <Button
            className='button-wrapper button-calc'
            handleClick={() => handleClick('=')}
          >
            Calculate!
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Calc;
