import React, { FC } from 'react';
import InputGroup from '../components/molecules/InputGroup';
import { ButtonPrimary } from '../components/atoms/Buttons';

interface SubmitInterface {
  onSubmit: () => void
};

const Submit: React.FC<SubmitInterface> = ({ onSubmit }) => {

  return (
    <div>
      <ButtonPrimary onClick={onSubmit}>Submit</ButtonPrimary>
    </div>
  )
};

export default Submit;