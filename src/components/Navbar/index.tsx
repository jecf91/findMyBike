import { Drawer, type DrawerProps } from '@mui/material';
import { DRAWER_WIDTH } from '@/constants';

interface NavbarProps extends DrawerProps {}

export const Navbar = ({ children, ...props }: NavbarProps) => {
  return (
    <Drawer
      sx={{
        width: DRAWER_WIDTH,
        flexShrink: 0,
        '& .MuiDrawer-paper': {
          width: DRAWER_WIDTH,
          boxSizing: 'border-box',
        },
      }}
      variant="permanent"
      component="nav"
      {...props}
    >
      {children}
    </Drawer>
  );
};
