import React from 'react';
import { withStyles, makeStyles } from '@material-ui/styles';
import { BaseButton } from './Buttons';
import { ButtonTabsProps } from '../../interfaces/';

const useStyles = makeStyles ({
  active: {
    backgroundColor: 'rgb(12, 106, 233)',
    color: 'white',
    '&:hover': {
      backgroundColor: 'rgb(12, 106, 233)'
    }
  },
  inactive: {
    backgroundColor: 'rgb(245, 249, 255)',
    color: 'rgb(12, 106, 233)',
    '&:hover': {
      backgroundColor: 'rgb(245, 249, 255)'
    }
  }
})

const ButtonTabBase = withStyles({
  root: {
    padding: '1.5rem 2rem 1.5rem 2rem',
  }
})(BaseButton);

const TabSingle: React.FC<ButtonTabsProps> = ({ active, ...props }) => {
  const classes = useStyles();

  let activeStyle = active ? classes.active : classes.inactive;

  return (
    <ButtonTabBase { ...props } className={activeStyle} />
  )
}

export default TabSingle;
