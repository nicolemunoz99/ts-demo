import { withStyles, makeStyles } from '@material-ui/styles';
import { Button } from '@material-ui/core';



export const BaseButton = withStyles({
  root: {
    padding: '0.4rem 2rem 0.4rem 2rem',
    textTransform: 'none',
  }
})(Button);


export const ButtonPrimary = withStyles({
  root: {
    backgroundColor: 'rgb(12, 106, 233)',
    boxShadow: 'none',
    color: 'white',
    '&:hover': {
      boxShadow: 'rgba(0, 0, 0, 0.2) 0px 5px 5px -3px, rgba(0, 0, 0, 0.14) 0px 8px 10px 1px, rgba(0, 0, 0, 0.12) 0px 3px 14px 2px;',
      backgroundColor: 'rgb(12, 106, 233)',
    },
    '&:active': {
      boxShadow: 'none',
      backgroundColor: 'rgb(12, 106, 233)',
    },
    '&:focus': {
      boxShadow: 'rgba(0, 0, 0, 0.2) 0px 5px 5px -3px, rgba(0, 0, 0, 0.14) 0px 8px 10px 1px, rgba(0, 0, 0, 0.12) 0px 3px 14px 2px;',
      backgroundColor: 'rgb(12, 106, 233)',
    },
  },
})(BaseButton);

export const ButtonSecondary = withStyles({
  root: {
    backgroundColor: 'inherit',
    '&:hover': {
      backgroundColor: 'rgba(13, 22, 45, 0.1)'
    }
  }
})(BaseButton);


export const ButtonAsText = withStyles({
  root: {
    textTransform: 'none',
    color: 'rgb(12, 106, 233)',
    borderRadius: '0.5rem',
    '&:hover': {
      backgroundColor: 'inherit',
      border: `1px  solid rgb(206, 225, 251)`,
     
    }
  }
})(Button);



