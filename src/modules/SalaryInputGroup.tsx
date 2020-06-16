import React, { FC } from 'react';
import InputGroup from '../components/molecules/InputGroup';
import Selector from '../components/atoms/Selector';
import PosNumInput from '../components/atoms/PosNumInput';
import { InputProps } from '../interfaces/'



const SalaryInputGroup: FC<InputProps> = ({ onChange }) => {
  let currencies = [
    {
      value: 'USD',
      label: '$',
    },
    {
      value: 'EUR',
      label: '€',
    },
    {
      value: 'BTC',
      label: '฿',
    },
    {
      value: 'JPY',
      label: '¥',
    },
  ];

  return (
    <InputGroup
    title="Salary"
    >
      <Selector id="currency" options={currencies} onChange={onChange} />
      <PosNumInput id="salaryNum" onChange={onChange} />
    </InputGroup>
  );
};

export default SalaryInputGroup;