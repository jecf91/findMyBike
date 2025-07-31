import { AppBar, type AppBarProps } from '@mui/material';
import { DRAWER_WIDTH } from '@/constants';

interface HeaderProps extends AppBarProps {}

export const Header = ({ children, ...props }: HeaderProps) => {
  return (
    <AppBar
      component="header"
      position="fixed"
      sx={{ width: `calc(100% - ${DRAWER_WIDTH}px)`, ml: `${DRAWER_WIDTH}px` }}
      {...props}
    >
      {children}
    </AppBar>
  );
};
