import React, { FC } from 'react';
import Grid from '@material-ui/core/Grid';

const PageMargins: FC = ({ children }) => {

  return (
    <Grid container justify="center">
      <Grid item xs={10} sm={8} lg={7} >

        <Grid container>
          { children }
        </Grid>

      </Grid>
    </Grid>
    
  )
}

export default PageMargins;