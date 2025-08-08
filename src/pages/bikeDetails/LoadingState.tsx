import { Grid, Skeleton } from '@mui/material';
import InfoCard from './components/InfoCard';

export const LoadingState = () => {
  return (
    <Grid
      columns={2}
      spacing={2}
      wrap="wrap"
      container
      sx={{ margin: '20px 0' }}
    >
      {[...Array(4)].map((_, index) => (
        <Grid size={1} key={index}>
          <InfoCard>
            {[...Array(3)].map((_, index) => (
              <Skeleton
                key={index}
                variant="rectangular"
                height={20}
                sx={{ mb: 0.8, borderRadius: 1 }}
                animation="pulse"
              />
            ))}
          </InfoCard>
        </Grid>
      ))}
    </Grid>
  );
};
