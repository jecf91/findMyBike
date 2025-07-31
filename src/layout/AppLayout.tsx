import { Box, CssBaseline } from '@mui/material';
import { Header, Navbar, MainContent } from '@/components';
import { Home } from '@/pages';
import { PageLayout } from './PageLayout';

export const AppLayout = () => {
  return (
    <Box sx={{ display: 'flex', minHeight: '100vh' }}>
      <Navbar>Nav</Navbar>
      <MainContent>
        <Header />
        <PageLayout pageTitle="List of stolen bikes in Berlin">
          <Home />
        </PageLayout>
      </MainContent>
      <CssBaseline />
    </Box>
  );
};
