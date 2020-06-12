import React from 'react';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';





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
    info: {
      inline: false,
      text: `documentation of fonts`
    },
    notes: 'some notes'
  }
};

export const InputFieldLabel = () => <FontWrapper color="text.secondary" fontSize="0.8rem" letterSpacing="0.1rem">Input label</FontWrapper>;

export const InputUnits = () =>  <FontWrapper color="text.secondary" fontSize="1rem" >months, %, $</FontWrapper>;

export const FormH1 = () => <FontWrapper fontWeight="fontWeightMedium" fontSize="1.2rem">Form h1</FontWrapper>;

export const FormH2 = () => <FontWrapper fontWeight="fontWeightMedium">Form h2</FontWrapper>;