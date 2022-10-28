import * as React from 'react';
import { Button, Menu, MenuItem } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import IconButton from '@mui/material/IconButton';
import { withStyles } from '@material-ui/styles';
import { colours } from '../../constants/colours';
import { useRouter } from 'next/router';

interface CollapsedMenuProps {
  pages: string[];
  open: boolean;
  anchorEl: HTMLElement;
  handleClose: () => void;
  handleClick: (event: React.MouseEvent<HTMLButtonElement>) => void;
}
export const CollapsedMenu = (props: CollapsedMenuProps) => {
  const { pages, open, anchorEl, handleClose, handleClick } = props;
  const router = useRouter();

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

  const routerClick = (event) => {
    router.push(`/${event.target.innerText.toLowerCase()}`);
  };

  return (
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
          <MenuItem onClick={handleClose} key={page} sx={{ color: 'white', backgroundColor: colours.brand }}>
            <Button onClick={routerClick} sx={{ color: 'white' }}>
              {page}
            </Button>
          </MenuItem>
        ))}
      </StyledMenu>
    </div>
  );
};
