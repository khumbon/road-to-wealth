/* eslint-disable @next/next/no-img-element */
import Name from '../public/assets/blog/images/Name.png';
import Slogan from '/public/assets/blog/images/Slogan.png';
import Road from '../public/assets/blog/images/Road.png';
import Grid from '@mui/material/Grid';
import * as React from 'react';
import Image from 'next/image';
import { colours } from '../constants/colours';

const Intro = () => {
  return (
    <div>
      <Grid
        container
        spacing={2}
        sx={{
          backgroundColor: colours.brand,
        }}
      >
        <Grid item xs={8}>
          <Image
            src={Name.src}
            width={Name.width}
            height={Name.height}
            style={{ paddingLeft: '200px' }}
            alt="Road to Wealth Logo"
          />
        </Grid>
        <Grid item xs={4} style={{ alignContent: 'bottom' }}>
          <img src={Road.src} width={Road.width} height={Road.height} alt="Picture of An Animated Road" />
        </Grid>

        <div style={{ alignContent: 'center' }}>
          <img
            src={Slogan.src}
            style={{ paddingLeft: '250px' }}
            alt="Slogan: A path through financial literacy"
            width="732.66"
            height="45"
          />
        </div>
      </Grid>
    </div>
  );
};

export default Intro;
