import { Box, Typography } from '@mui/material';
import { Outlet } from 'react-router';

interface PageLayoutProps {
  pageTitle: string;
}

export const PageLayout = ({ pageTitle }: PageLayoutProps) => {
  return (
    <Box
      sx={{
        padding: '20px',
        display: 'flex',
        flexDirection: 'column',
        gap: '20px',
      }}
    >
      <Typography variant="h3">{pageTitle}</Typography>
      <Box>
        <Outlet />
      </Box>
    </Box>
  );
};
