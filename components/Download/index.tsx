import * as React from 'react';
import Card from '../Card';
import { colours } from '../../constants/colours';
import { Grid } from '@mui/material';

const Download = ({ children }: { children: React.ReactNode }) => {
  return (
    <Grid container width={58}>
      <Card backgroundColour={colours.white} classname="downloadCard">
        <Grid container display="flex">
          {children}
        </Grid>
      </Card>
    </Grid>
  );
};

export default Download;
