import React from 'react';
import { InputField } from '../../components/atoms/Input.tsx';
import PosNumInput from '../../components/atoms/PosNumInput.tsx';


export default {
  title: 'atoms/Inputs',
  parameters: {
    notes: 'Inputs for form https://staging.talagentfinancial.com/add-new-client'
  }
};

export const NumberInput =  () => <InputField type="number" placeholder="optional placeholder" />

export const TextInput =    () => <InputField type="text" label="optional label" />

export const DateInput =    () => <InputField type="date" />

export const PositiveNumber = () =>{
  const handleChange = (e) => {
    console.log('input value: ', e.target.value);
  };

  return (
    <PosNumInput onChange={handleChange} />
  );
}

export const InputWithError = () => <InputField error={true} errorText="There is an error." type="number" />
