import React, { useState } from 'react';
import { InputProps } from '../../interfaces/';
import { InputField } from '../atoms/Input';

const PosNumInput: React.FC<InputProps> = ({ onChange=()=>{}, ...props}) => {
  const [num, setNum] = useState('');
  const [errState, setErrState] = useState(false);

  const handleChange = (e:any) => {
    if (Number(e.target.value) < 0) {
      setErrState(true);
    } else {
      setErrState(false);
    }
    onChange(e);
    setNum(e.target.value);
    
  };  

  return (
    <InputField 
      type="number"
      error={errState}
      errorText="Must be positive value."
      onChange={handleChange}
      value={num}
      {...props}
    />
  );
};

export default PosNumInput;