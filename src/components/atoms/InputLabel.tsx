import React from 'react';
import { makeStyles } from '@material-ui/styles';

const useStyles = makeStyles({
  root: { 
    fontFamily: 'Arial, Helvetica, sans-serif'
  },
  title: {
    color: 'grey',
    fontSize: '0.8rem',
    letterSpacing: "0.08rem"
  },
  units: {
    color: 'grey',
  }
});

interface LabelProps {
  value: string;
  role: string;
};


const InputLabel: React.FC<LabelProps> = ({ value, role }) => {
  const classes = useStyles();

  let getRoleClass = (key: string) => (obj: Record<string, any>) => obj[key];
 
  console.log('roleClass', role, getRoleClass(role)(classes))

  let roleClass = role ? getRoleClass(role)(classes) : '';

  return (
    <span className = {`${classes.root} ${roleClass}`}>
      { value }
    </span>
  );
};

export default InputLabel;