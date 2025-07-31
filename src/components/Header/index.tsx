import { Box, type BoxProps, Typography } from '@mui/material';

interface HeaderProps extends BoxProps {}

export const Header = ({ ...props }: HeaderProps) => {
  return (
    <Box
      component="header"
      sx={{
        bgcolor: 'primary.main',
        color: 'primary.contrastText',
        height: '50px',
        display: 'flex',
        alignItems: 'center',
        padding: '0 20px',
      }}
      {...props}
    >
      <Typography>FindMyBike</Typography>
    </Box>
  );
};
