import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Button from '@mui/material/Button';
import Image from 'next/image';
import Name from '../../public/assets/blog/images/Name.png';
import Road from '../../public/assets/blog/images/Road.png';
import { Grid, Menu, MenuItem, useMediaQuery } from '@mui/material';
import Link from 'next/link';
import MenuIcon from '@mui/icons-material/Menu';
import IconButton from '@mui/material/IconButton';
import { withStyles } from '@material-ui/styles';
import { colours, screenSizes } from '../../constants';

const pages = ['About', 'Downloads', 'Videos', 'Posts'];

const ResponsiveAppBar = () => {
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const open = Boolean(anchorEl);
  const handleClose = () => {
    setAnchorEl(null);
  };

  const StyledMenu = withStyles({
    paper: {
      backgroundColor: colours.brand,
    },
  })((props) => (
    <Menu
      id="basic-menu"
      anchorEl={anchorEl}
      open={open}
      onClose={handleClose}
      MenuListProps={{
        'aria-labelledby': 'basic-button',
      }}
      {...props}
    />
  ));

  const isMobile = useMediaQuery(`(max-width: ${screenSizes.tablet}px)`);
  return (
    <Box sx={{ flexGrow: 1, background: colours.brand }}>
      <AppBar position="static" style={{ background: colours.brand }}>
        <Toolbar disableGutters>
          <Grid container spacing={2} columns={32}>
            <Grid item xs={20} style={{ marginLeft: '30px' }}>
              <Link href="/">
                <a>
                  <Image src={Name.src} width="525.3px" height="80px" alt="Road to Wealth Logo" />
                </a>
              </Link>
            </Grid>
            <Grid item xs={8}>
              {isMobile ? (
                <div className="collapsedMenu">
                  <IconButton
                    size="large"
                    edge="start"
                    color="inherit"
                    aria-label="open drawer"
                    aria-controls={open ? 'basic-menu' : undefined}
                    aria-haspopup="true"
                    aria-expanded={open ? 'true' : undefined}
                    sx={{ mr: 2 }}
                    onClick={handleClick}
                  >
                    <MenuIcon />
                  </IconButton>
                  <StyledMenu>
                    {pages.map((page) => (
                      <MenuItem
                        onClick={handleClose}
                        key={page}
                        sx={{ color: 'white', backgroundColor: colours.brand }}
                      >
                        <Button href={page.toLowerCase()} sx={{ color: 'white' }}>
                          {page}
                        </Button>
                      </MenuItem>
                    ))}
                  </StyledMenu>
                </div>
              ) : (
                <Grid container spacing={2} columns={32} sx={{ paddingTop: '10px', bottom: 0 }}>
                  {pages.map((page) => (
                    <Grid item xs={8} key={page}>
                      <Button key={page} href={page.toLowerCase()} sx={{ my: 2, color: 'white', paddingTop: '15px' }}>
                        {page}
                      </Button>
                    </Grid>
                  ))}
                </Grid>
              )}
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
