import React from 'react';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';

import InputLabel from '../components/atoms/InputLabel.tsx';
import FormHeader from '../components/atoms/FormHeader.tsx'



const FontWrapper = ({ children, ...fontProps }) => (
  <Typography component="span"> 
    <Box {...fontProps}>
      { children }
    </Box>
  </Typography>
)

export default {
  title: 'Font',
  component: FontWrapper,
  parameters: {
    notes: 'fonts for form https://staging.talagentfinancial.com/add-new-client'
  }
};

export const InputFieldTitle = () => <InputLabel value="Title for input field" role="title"/>
export const InputFieldUnits = () => <InputLabel value="Units for input field ($, months)" role="units"/>

export const FormH1 = () => <FormHeader value="Form H1" level="h1"/>
export const FormH2 = () => <FormHeader value="Form H2" level="h2"/>
