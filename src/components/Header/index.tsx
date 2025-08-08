import {
  Box,
  type BoxProps,
  Button,
  Typography,
  Link as MuiLink,
} from '@mui/material';
import { Link } from 'react-router';

interface HeaderProps extends BoxProps {}

export const Header = ({ ...props }: HeaderProps) => {
  return (
    <Box
      component="header"
      sx={{
        bgcolor: 'primary.main',
        color: 'primary.contrastText',
        height: 64,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        px: 3,
        boxShadow: 1,
      }}
      {...props}
    >
      <Typography
        component={Link}
        to="/"
        variant="h6"
        fontWeight={600}
        sx={{
          color: 'primary.contrastText',
          textDecoration: 'none',
          cursor: 'pointer',
          '&:hover': {
            textDecoration: 'underline',
          },
        }}
      >
        FindMyBike
      </Typography>

      <Button
        variant="outlined"
        color="inherit"
        size="small"
        component={MuiLink}
        href="https://bikeindex.org/documentation/api_v3"
        target="_blank"
        rel="noopener noreferrer"
        sx={{
          borderColor: 'primary.contrastText',
          color: 'primary.contrastText',
          '&:hover': {
            borderColor: 'primary.contrastText',
            backgroundColor: 'rgba(255, 255, 255, 0.1)',
          },
        }}
      >
        API Docs
      </Button>
    </Box>
  );
};
