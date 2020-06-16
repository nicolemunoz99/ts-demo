import React, { FC } from 'react';
import { makeStyles } from '@material-ui/styles';
import { Grid } from '@material-ui/core/';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles({
  pageTitle: { 
    margin: `2rem 0 1rem 0`
  }
});

const PageTitle: FC = ({ children }) => {

  const classes = useStyles();

  return (

  <Grid container justify="center" className={classes.pageTitle}>
    <Grid item ><Typography align="center" variant="h4">{ children }</Typography></Grid>
  </Grid>

  )
}

export default PageTitle;