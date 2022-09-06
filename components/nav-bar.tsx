import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Button from '@mui/material/Button';
import Image from 'next/image';
import Name from '../public/assets/blog/images/Name.png';
import Road from '../public/assets/blog/images/Road.png';
import { Grid } from '@mui/material';

const pages = ['About', 'Downloads', 'Videos', 'Blog'];

const ResponsiveAppBar = () => {
  const [anchorElNav, setAnchorElNav] = React.useState<null | HTMLElement>(null);

  const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  return (
    <Box sx={{ flexGrow: 1, background: '#16576a' }}>
      <AppBar position="static" style={{ background: '#16576a' }}>
        <Toolbar disableGutters>
          <Grid container spacing={2} columns={32}>
            <Grid item xs={21}>
              <Image src={Name.src} width="525.3px" height="80px" alt="Road to Wealth Logo" />
            </Grid>
            <Grid item xs={8}>
              {pages.map((page) => (
                <Button key={page} onClick={handleCloseNavMenu} sx={{ my: 2, color: 'white' }}>
                  {page}
                </Button>
              ))}
            </Grid>
            <Grid item xs={3}>
              <Image src={Road.src} width="90.7px" height="80px" alt="Picture of An Animated Road" />
            </Grid>
          </Grid>
        </Toolbar>
      </AppBar>
    </Box>
  );
};
export default ResponsiveAppBar;
