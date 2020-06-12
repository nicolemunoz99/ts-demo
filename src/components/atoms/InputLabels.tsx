import React from 'react';
import { WithStyles, createStyles } from '@material-ui/core/styles';
import { makeStyles } from '@material-ui/styles';


const useStyles = () =>  createStyles({
  root: { color: 'red' },
})

interface TitleProps {
  value: string;
}
const useStyles2 = makeStyles({
  root: {
    background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
    border: 0,
    borderRadius: 3,
    boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
    color: 'white',
    height: 48,
    padding: '0 30px',
  },
});

export const Title: React.FC<TitleProps> = ({ value }) => {
  const c:string = String(useStyles().root);
  // const c = 'another-class'
  return (
    <span className = {useStyles2}>
      { value }
    </span>
  )
};
