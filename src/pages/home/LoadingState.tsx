import { Skeleton } from '@mui/material';

export const LoadingState = () => {
  return (
    <Skeleton
      variant="rectangular"
      animation="pulse"
      sx={{ minWidth: 700 }}
      height={200}
    />
  );
};
