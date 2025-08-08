import { useGetBike } from '@/controllers';
import { Box, Button, Grid } from '@mui/material';
import { useParams } from 'react-router';
import InfoCard from './components/InfoCard';
import { bikeAdapter } from '@/adapters';
import { convertSnakeCaseToTitleCase, getFormattedDateWithTime } from '@/utils';
import { isNotDefinedPropertyChecker } from './utils';
import { MapModal } from './components/MapModal';
import { LoadingState } from './LoadingState';
import { ErrorState, EmptyState, BreadcrumbsNav } from '@/components';
import { useModal } from './hooks/useModal';

const HIDDEN_DETAILS = ['stolenCoordinates', 'image'];

export const BikeDetails = () => {
  const { open, handleClose, handleOpen } = useModal();
  const { bikeId } = useParams<{ bikeId: string }>();

  const { isLoading, isError, data: bike, refetch } = useGetBike(bikeId ?? '');

  if (isLoading) return <LoadingState />;

  if (isError)
    return (
      <ErrorState message="Failed to load bike details." onRetry={refetch} />
    );

  if (!bike) return <EmptyState message="There is no bike for the given id" />;

  const adaptedBike = bikeAdapter(bike);

  return (
    <Box component="section">
      <BreadcrumbsNav
        items={[{ label: 'Home', to: '/' }, { label: `Bike ID: ${bikeId}` }]}
      />
      <Grid
        columns={2}
        spacing={2}
        wrap="wrap"
        container
        sx={{ margin: '20px 0' }}
      >
        {Object.entries(adaptedBike).map(([key, value]) => {
          if (HIDDEN_DETAILS.includes(key)) {
            return null;
          }

          const label = convertSnakeCaseToTitleCase(key);
          const displayValue =
            key === 'dateStolen'
              ? getFormattedDateWithTime(value)
              : isNotDefinedPropertyChecker(value);

          return (
            <Grid size={1} key={key}>
              <InfoCard>
                <InfoCard.Title>{label}</InfoCard.Title>
                <InfoCard.Description>{displayValue}</InfoCard.Description>
                {key === 'stolenLocation' && adaptedBike.stolenCoordinates && (
                  <InfoCard.Action>
                    <Button onClick={handleOpen} variant="contained">
                      See Details
                    </Button>
                  </InfoCard.Action>
                )}
              </InfoCard>
            </Grid>
          );
        })}
      </Grid>
      <MapModal
        open={open}
        onClose={handleClose}
        stolenCoordinates={adaptedBike.stolenCoordinates}
      />
    </Box>
  );
};
