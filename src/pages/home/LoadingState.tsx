import { Box, Skeleton } from '@mui/material';

export const LoadingState = () => {
  return (
    <Box sx={{ minWidth: 700, width: '100%' }}>
      <Skeleton variant="rectangular" height={40} sx={{ mb: 1 }} />
      {[...Array(5)].map((_, index) => (
        <Skeleton
          key={index}
          variant="rectangular"
          height={30}
          sx={{ mb: 0.8, borderRadius: 1 }}
          animation="pulse"
        />
      ))}
    </Box>
  );
};
