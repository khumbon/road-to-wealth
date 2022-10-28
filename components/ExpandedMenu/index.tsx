import * as React from 'react';
import { Button, Grid, Box } from '@mui/material';
import { useRouter } from 'next/router';

interface ExpandedMenuProps {
  pages: string[];
}

export const ExpandedMenu = (props: ExpandedMenuProps) => {
  const { pages } = props;
  const router = useRouter();

  const routerClick = (event) => {
    router.push(`/${event.target.innerText.toLowerCase()}`);
  };

  return (
    <Grid container spacing={2} columns={32} sx={{ paddingTop: '10px', bottom: 0 }}>
      {pages.map((page) => (
        <Grid item xs={8} key={page} width="75px">
          <Box display="flex" justifyContent="center">
            <Button key={page} onClick={routerClick} sx={{ my: 2, color: 'white', paddingTop: '15px' }}>
              {page}
            </Button>
          </Box>
        </Grid>
      ))}
    </Grid>
  );
};
