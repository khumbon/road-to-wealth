import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Image from 'next/image';
import Name from '../../public/assets/blog/images/Name.png';
import Road from '../../public/assets/blog/images/Road.png';
import { Grid, useMediaQuery, Box } from '@mui/material';
import Link from 'next/link';
import { screenSizes } from '../../constants';
import { CollapsedMenu } from '../CollapsedMenu';
import { ExpandedMenu } from '../ExpandedMenu';
import { colours } from '../../constants/colours';

const pages = ['About', 'Blog', 'Videos', 'Downloads'];

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
    <Box sx={{ flexGrow: 1 }} className="bg-brand dark:bg-brand">
      <AppBar position="static" className="bg-brand">
        <Toolbar disableGutters>
          <Grid container spacing={2} columns={32}>
            <Grid item xs={18} style={{ margin: '10px 0px 10px 30px' }}>
              <Link href="/">
                <Image src={Name.src} width="525" height="80" alt="Road to Wealth Logo" />
              </Link>
            </Grid>
            {isMobile ? (
              <Grid item xs={10}>
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
                  <Image src={Road.src} width="91" height="80" alt="Picture of An Animated Road" />
                </Grid>
              </>
            )}
          </Grid>
        </Toolbar>
      </AppBar>
    </Box>
  );
};
