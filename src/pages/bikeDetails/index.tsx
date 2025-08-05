import { useGetBike } from '@/controllers';
import { Box, Grid, Typography } from '@mui/material';
import { useParams } from 'react-router';
import InfoCard from './components/InfoCard';
import { bikeAdapter, type BikeAdapter } from '@/adapters';
import { MapComponent } from '@/components';

export const BikeDetails = () => {
  const { bikeId } = useParams<{ bikeId: string }>();

  const { isLoading, isError, data: bike } = useGetBike(bikeId ?? '');

  if (isLoading) return <p>Loading...</p>;

  if (isError) return <p></p>;

  if (!bike) return <p>There is no bike for the given id</p>;

  const adaptedBike = bikeAdapter(bike);

  return (
    <Box component="section">
      <Typography variant="h5">Bike id: {bikeId}</Typography>
      <Grid container spacing={2} columns={{ xs: 2, sm: 4 }}>
        {Object.keys(adaptedBike).map((objKey) => (
          <Grid size={2}>
            <InfoCard>
              <InfoCard.Title>{objKey}</InfoCard.Title>
              <InfoCard.Description>
                {adaptedBike[objKey as keyof BikeAdapter] ?? '-'}
              </InfoCard.Description>
            </InfoCard>
          </Grid>
        ))}
      </Grid>
      <Box sx={{ all: 'initial' }}>
        <MapComponent position={adaptedBike.stolenCoordinates} />
      </Box>
    </Box>
  );
};
