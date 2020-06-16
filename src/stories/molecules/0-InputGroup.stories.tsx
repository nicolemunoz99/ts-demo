import React from 'react';
import InputGroup from '../../components/molecules/InputGroup';
import { InputField } from '../../components/atoms/Input';
import Selector from '../../components/atoms/Selector';

export default {
  title: 'molecules/Input Groups',
  parameters: {
    notes: 'Input Group for form https://staging.talagentfinancial.com/add-new-client'
  }
};

export const SingleInputField = () => {
  return (
    <InputGroup
      title="Title"
      units="/day"
    >
      <Input2 />
    </InputGroup>
  );
};

export const TwoInputFields = () => {
  return(
    <InputGroup 
      title="Optional title"
      units="Optional units"
    >
      <Input1 />
      <Input2 />
    </InputGroup>
  ); 
};




const Input1: React.FC = () => {

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
  
  const handleChange = (e:any) => {
    console.log('selected a currency: ', e.target.value)
  };

  return (
    <Selector options={currencies} onChange={handleChange} />
  );
};



const Input2: React.FC = () => {
  const handleChange = (e:any) => {
    console.log('entered value: ', e.target.value)
  };
  
  return (
    <InputField type="number" onChange={handleChange} />
  );
};



