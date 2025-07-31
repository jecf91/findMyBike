import { Box, Typography } from '@mui/material';

interface PageLayoutProps {
  pageTitle: string;
  children: React.ReactNode;
}

export const PageLayout = ({ pageTitle, children }: PageLayoutProps) => {
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
      <Box>{children}</Box>
    </Box>
  );
};
