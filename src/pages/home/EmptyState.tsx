import { Box, Typography } from '@mui/material';

export const EmptyState = () => {
  return (
    <Box component="section">
      <Typography variant="body1">There are no bikes to show.</Typography>
    </Box>
  );
};
