import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Image from 'next/image';
import Name from '../../public/assets/blog/images/Name.png';
import Road from '../../public/assets/blog/images/Road.png';
import { Grid, useMediaQuery, Box } from '@mui/material';
import Link from 'next/link';
import { colours, screenSizes } from '../../constants';
import { CollapsedMenu } from '../CollapsedMenu';
import { ExpandedMenu } from '../ExpandedMenu';

const pages = ['About', 'Downloads', 'Videos', 'Articles'];

export const ResponsiveNavBar = () => {
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const open = Boolean(anchorEl);
  const handleClose = () => {
    setAnchorEl(null);
  };

  const isMobile = useMediaQuery(`(max-width: ${screenSizes.smallDesktop}px)`);
  return (
    <Box sx={{ flexGrow: 1, background: colours.brand }}>
      <AppBar position="static" style={{ background: colours.brand }}>
        <Toolbar disableGutters>
          <Grid container spacing={2} columns={32}>
            <Grid item xs={18} style={{ marginLeft: '30px' }}>
              <Link href="/">
                <a>
                  <Image src={Name.src} width="525.3px" height="80px" alt="Road to Wealth Logo" />
                </a>
              </Link>
            </Grid>
            {isMobile ? (
              <Grid item xs={12}>
                <Box display="flex" justifyContent="flex-end">
                  <CollapsedMenu
                    pages={pages}
                    open={open}
                    anchorEl={anchorEl}
                    handleClose={handleClose}
                    handleClick={handleClick}
                  />
                </Box>
              </Grid>
            ) : (
              <>
                <Grid item xs={10}>
                  <ExpandedMenu pages={pages} />
                </Grid>
                <Grid item xs={3}>
                  <Image src={Road.src} width="90.7px" height="80px" alt="Picture of An Animated Road" />
                </Grid>
              </>
            )}
          </Grid>
        </Toolbar>
      </AppBar>
    </Box>
  );
};
