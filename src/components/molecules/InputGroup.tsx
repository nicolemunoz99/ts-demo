import React, {FC} from 'react';
import InputLabel from '../atoms/InputLabel';
import { Grid, Box} from '@material-ui/core/';
import { GroupInputProps } from '../../interfaces/';


const InputGroup: React.FC<GroupInputProps> = ({ title, units, children }) => {

  
  return (
    <Box my={3}>
    <Grid container>

      <Grid container>
        <Grid item>
          {title && <InputLabel role="title">{title}</InputLabel>}
        </Grid>
      </Grid>

      <Grid container>
        
        { children }


        <Grid item>
          {units && <InputLabel role="units">{units}</InputLabel>}
        </Grid>

      </Grid>

    </Grid>
    </Box>
  )
}

export default InputGroup;