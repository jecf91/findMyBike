import { Box, CssBaseline } from '@mui/material';
import { Header, MainContent } from '@/components';
import { BikeDetails, Home } from '@/pages';
import { PageLayout } from './PageLayout';
import { Routes, Route } from 'react-router';

export const AppLayout = () => {
  return (
    <Box sx={{ display: 'flex', minHeight: '100vh' }}>
      <MainContent>
        <Header />
        <Routes>
          <Route
            element={<PageLayout pageTitle="List of Stolen Bikes in Berlin" />}
          >
            <Route index element={<Home />} />
          </Route>
          <Route element={<PageLayout pageTitle="Bike Details" />}>
            <Route path="bike/:bikeId" element={<BikeDetails />} />
          </Route>
        </Routes>
      </MainContent>
      <CssBaseline />
    </Box>
  );
};
