import { Box, Typography, Button } from '@mui/material';
type ErrorStateProps = {
  message?: string;
  onRetry?: () => void;
};

export const ErrorState = ({
  message = 'Something went wrong.',
  onRetry,
}: ErrorStateProps) => {
  return (
    <Box
      display="flex"
      flexDirection="column"
      alignItems="center"
      justifyContent="center"
      minHeight="50vh"
      textAlign="center"
      p={4}
    >
      <Typography variant="h6" color="error" gutterBottom>
        {message}
      </Typography>

      {onRetry && (
        <Button variant="contained" color="error" onClick={onRetry}>
          Try Again
        </Button>
      )}
    </Box>
  );
};
