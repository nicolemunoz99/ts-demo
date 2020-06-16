import React from 'react';
import Selector from '../../components/atoms/Selector.tsx';


export default {
  title: 'atoms/Selector',
  parameters: {
    notes: 'Selector for form https://staging.talagentfinancial.com/add-new-client'
  }
};



export const DefaulSelector =  () => {

  const handleChange = (e) => {
    console.log('do something with event object \n', e)
  }

  let optionsDemo = [
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
  
  return <Selector  options={optionsDemo} onChange={handleChange} />
  
};

