import React, { useState } from 'react';
import { SelectorProps } from '../../interfaces';
import { InputField } from './Input';


let optionsTemp = [
  {
    value: 'option1',
    label: '1',
  },
  {
    value: 'option2',
    label: '2',
  },
  {
    value: 'options3',
    label: '3',
  },
];



const Selector: React.FC<SelectorProps> = ({
  onChange=()=>{},
  options=optionsTemp, 
  defaultSelection=0,
  ...props
}) => {

  const [selected, setSelected] = useState(options[defaultSelection].value);

  const handleChange = (e: any) => {
    onChange(e);
    setSelected(e.target.value);
  };

  
  return (
    <InputField
      select
      onChange={handleChange}
      value={selected}
      SelectProps={{
        native: true,
      }}
      { ...props }

    >

    {options.map((option) => (
      <option key={option.value} id={option.value} value={option.value}>
        {option.label}
      </option>
    ))}

  </InputField>
  );
};
export default Selector