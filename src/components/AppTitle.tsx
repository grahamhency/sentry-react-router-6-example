import { Typography } from '@mui/material';
import { ReactNode } from 'react';

export function AppTitle({ children }: { children: ReactNode }) {
  return (
    <Typography marginBottom="2.5rem" variant="h3">
      {children}
    </Typography>
  );
}
