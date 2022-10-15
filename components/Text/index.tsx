import { Typography } from '@mui/material';
import * as React from 'react';

export const Text = ({
  children,
  align,
}: {
  children: string;
  align?: 'left' | 'right' | 'inherit' | 'center' | 'justify';
}) => {
  return (
    <Typography style={{ marginBottom: '5px' }} align={align}>
      {children}
    </Typography>
  );
};
