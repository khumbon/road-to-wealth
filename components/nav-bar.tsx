import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Button from '@mui/material/Button';
import Image from 'next/image';
import Name from '../public/assets/blog/images/Name.png';
import Road from '../public/assets/blog/images/Road.png';
import { Grid } from '@mui/material';
import Link from 'next/link';

const pages = ['About', 'Downloads', 'Videos', 'Posts'];

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
            <Grid item xs={20}>
              <Link href="/">
                <a>
                  <Image src={Name.src} width="525.3px" height="80px" alt="Road to Wealth Logo" />
                </a>
              </Link>
            </Grid>
            <Grid item xs={9}>
              <Grid container spacing={2} columns={32} sx={{ paddingTop: '20px', bottom: 0 }}>
                {pages.map((page) => (
            <Grid item xs={8} key={page}>
                  <Button key={page} href={page.toLowerCase()} sx={{ my: 2, color: 'white', paddingTop: '15px' }}>
                    {page}
                    </Button>
                    </Grid>
                ))}
              </Grid>
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
