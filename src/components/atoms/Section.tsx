import React from 'react';
import { makeStyles } from '@material-ui/styles';
import { Box } from '@material-ui/core';

const useStyles = makeStyles({
  root: { 
    fontFamily: 'Arial, Helvetica, sans-serif',
    margin: '2rem 0 2rem 0',
    border: '1px grey solid',
    width: '100%',
    padding: '0 1rem 1rem 1rem',
  }
});

interface LabelProps {
  employee: any;
};

interface SectionProps {
  children: any,
}

const Section: React.FC<SectionProps> = ({ children }) => {
  const classes = useStyles()
  return (

    <Box className={classes.root}>
      { children }
    </Box>

  );
};

export default Section;