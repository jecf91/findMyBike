import { Box, CssBaseline } from '@mui/material';
import { Header, Navbar, MainContent } from '@/components';
import { Home } from '@/pages';

export const PageLayout = () => {
  return (
    <Box sx={{ display: 'flex' }}>
      <Navbar>Nav</Navbar>
      <MainContent>
        <Header>Header</Header>
        <Home />
      </MainContent>
      <CssBaseline />
    </Box>
  );
};
