import React from 'react';
import { makeStyles } from '@material-ui/styles';

const useStyles = makeStyles({
  root: { 
    fontFamily: 'Arial, Helvetica, sans-serif',
  },
  h1: {
    margin: '3rem 0 0 0 ',
    fontSize: '1.2rem',
    fontWeight: 520,
  },
  h2: {
    fontWeight: 500,
  }
});

interface HeaderProps {
  level: string;
};


const FormHeader: React.FC<HeaderProps> = ({ children, level }) => {
  const classes = useStyles();

  let getLevelClass = (key: string) => (obj: Record<string, any>) => obj[key];

  let levelClass = level ? getLevelClass(level)(classes) : '';

  return (
    <div className = {`${classes.root} ${levelClass}`}>
      { children }
    </div>
  );
};

export default FormHeader;