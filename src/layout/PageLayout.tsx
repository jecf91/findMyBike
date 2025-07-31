import { Box, CssBaseline } from '@mui/material';
import { Header, Navbar, MainContent } from '@/components';

export const PageLayout = () => {
  return (
    <Box sx={{ display: 'flex' }}>
      <Navbar>Nav</Navbar>
      <MainContent>
        <Header>Header</Header>
        <h1>Main content</h1>
      </MainContent>
      <CssBaseline />
    </Box>
  );
};
