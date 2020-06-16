import React from 'react';

import InputLabel from '../../components/atoms/InputLabel.tsx';
import FormHeader from '../../components/atoms/FormHeader.tsx'



export default {
  title: 'atoms/Fonts',
  parameters: {
    notes: 'fonts for form https://staging.talagentfinancial.com/add-new-client'
  }
};

export const InputFieldTitle = () => <InputLabel role="title">Title for input field</InputLabel>
export const InputFieldUnits = () => <InputLabel role="units">Units for input field ($, months)</InputLabel>

export const FormH1 = () => <FormHeader level="h1">Form H1</FormHeader>
export const FormH2 = () => <FormHeader level="h2">Form H2</FormHeader>
