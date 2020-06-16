import React from 'react';
import { makeStyles } from '@material-ui/styles';
import { TextField } from '@material-ui/core';
import { InputProps } from '../../interfaces';


const useStyles = makeStyles({
  root: { 
    width: (props:InputProps) => props.width,
    margin: `0.3rem`
  }
});

export const InputField: React.FC<InputProps> = (props) => {

  let {
    error=false,
    type='text',
    helperText='',
    errorText='Error',
    onChange=()=>{},
    ...rest 
  } = props;

  let classes = useStyles(props);

  return (
      <TextField 
        variant="outlined"
        margin="dense"
        error={error}
        type={type}
        helperText={error ? errorText : helperText}
        onChange={(e)=>onChange(e)}
        { ...rest }
        className={`${classes.root}`}
      />
  );
};



