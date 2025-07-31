import { useGetBikes } from '@/controllers';
import { CircularProgress } from '@mui/material';

export const Home = () => {
  const { isLoading, data } = useGetBikes();

  console.log(data);

  if (isLoading) {
    return <CircularProgress />;
  }

  if (!data?.length) {
    return (
      <div>
        <p>No data available</p>
      </div>
    );
  }

  return (
    <div>
      <pre>{JSON.stringify(data, null, 2)}</pre>
    </div>
  );
};
