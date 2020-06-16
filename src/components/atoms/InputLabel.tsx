import React from 'react';
import { makeStyles } from '@material-ui/styles';
import { Box } from '@material-ui/core';

const useStyles = makeStyles({
  root: { 
    fontFamily: 'Arial, Helvetica, sans-serif',
  },
  title: {
    color: 'grey',
    fontSize: '0.8rem',
    letterSpacing: "0.08rem"
  },
  units: {
    color: 'grey',
    margin: '1rem 0 0 0'
  }
});

interface LabelProps {
  role: string;
};


const InputLabel: React.FC<LabelProps> = ({ children, role }) => {
  const classes = useStyles();

  let getRoleClass = (key: string) => (obj: Record<string, any>) => obj[key];

  let roleClass = role ? getRoleClass(role)(classes) : '';

  return (

      <Box className = {`${classes.root} ${roleClass}`}>
        { children }
      </Box>

  );
};

export default InputLabel;