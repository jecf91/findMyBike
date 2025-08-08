import { Box, Typography } from '@mui/material';

interface EmptyStateProps {
  message: string;
}

export const EmptyState = ({ message }: EmptyStateProps) => {
  return (
    <Box component="section">
      <Typography variant="body1">{message}</Typography>
    </Box>
  );
};
