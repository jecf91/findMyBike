import { bikesAdapter } from '@/adapters';
import { useGetBikes, useGetSearchCount } from '@/controllers';
import { useMemo } from 'react';
import { LoadingState } from './LoadingState';
import { EmptyState } from './EmptyState';
import { BikesTable } from './components/BikesTable';
import { usePagination } from '@/hooks';
import { ErrorState } from './ErrorState';
import { BikesPagination } from './components/BikesPagination';

export const Home = () => {
  const { currentPage, handlePageChange } = usePagination();
  const {
    isLoading: isBikesLoading,
    data: bikes,
    error: bikesError,
    refetch: bikesRefetch,
  } = useGetBikes(currentPage);
  const {
    isLoading: isSearchCountLoading,
    data: searchCountData,
    error: searchCountError,
    refetch: searchCountRefetch,
  } = useGetSearchCount();

  const isLoading = isSearchCountLoading || isBikesLoading;
  const hasError = bikesError || searchCountError;

  const handleRetry = () => {
    bikesRefetch();
    searchCountRefetch();
  };

  const rows = useMemo(() => {
    return bikes ? bikesAdapter(bikes) : [];
  }, [bikes]);

  if (isLoading) return <LoadingState />;

  if (hasError)
    return <ErrorState message="Failed to load bikes." onRetry={handleRetry} />;

  if (!bikes?.length) return <EmptyState />;

  return (
    <>
      <BikesTable rows={rows} />
      <BikesPagination
        searchCountData={searchCountData}
        currentPage={currentPage}
        handlePageChange={handlePageChange}
        isDisabled={isLoading}
      />
    </>
  );
};
