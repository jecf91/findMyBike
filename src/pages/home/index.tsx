import { bikesAdapter } from '@/adapters';
import { useGetBikes } from '@/controllers';
import { useMemo } from 'react';
import { LoadingState } from './LoadingState';
import { EmptyState } from './EmptyState';
import { BikesTable } from './components/BikesTable';

export const Home = () => {
  const { isLoading, data } = useGetBikes();

  const rows = useMemo(() => {
    return data ? bikesAdapter(data) : [];
  }, [data]);

  if (isLoading) <LoadingState />;

  if (!data?.length) <EmptyState />;

  return <BikesTable rows={rows} />;
};
