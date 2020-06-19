import React, { FC } from 'react';
import InputGroup from '../components/molecules/InputGroup';
import Selector from '../components/atoms/Selector';
import { InputProps } from '../interfaces/';
import { InputField } from '../components/atoms/Input';


const NameInputGroup:FC<InputProps> = ({ onChange }) => {
  return (
    <InputGroup title="Name">
      <Selector id="namePref" options={prefixOptions} onChange={onChange}/>
      <InputField id="name" onChange={onChange} placeholder="Full name" />
      <Selector id="nameSuff" options={suffixOptions} onChange={onChange}/>
    </InputGroup>
  )
};

export default NameInputGroup;

const prefixOptions = [
  {
    value: '',
    label: '-'
  },
  {
    value: 'Ms',
    label: 'Ms.'
  },
  {
    value: 'Mr',
    label: 'Mr.'
  },
];

const suffixOptions = [
  {
    value: '',
    label: '-'
  },
  {
    value: 'jr',
    label: 'Jr.'
  },
  {
    value: 'sr',
    label: 'Sr.'
  }
]