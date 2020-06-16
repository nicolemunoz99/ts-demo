import React, { useState } from 'react';
import Page from '../components/molecules/Page';

interface InputDisplayProps {
  formVals: any
}

const InputDisplay: React.FC<InputDisplayProps> = ({ formVals }) => {
  return (
    <Page title="Results">
      <div>
        Name: {formVals.namePref} {formVals.name} {formVals.nameSuff}
      </div>
    </Page>
  )
};

export default InputDisplay;