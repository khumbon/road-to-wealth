import { Typography } from '@mui/material';
import * as React from 'react';

export const Text = ({ children }: { children: string }) => {
  return <Typography style={{ marginBottom: '5px' }}>{children}</Typography>;
};
