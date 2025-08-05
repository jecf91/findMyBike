import { keepPreviousData, useQuery } from '@tanstack/react-query';
import { getBikes } from '@/controllers/queries';
import { GET_ALL_BIKES_KEY } from '@/controllers/constants/queryKeys';

export const useGetBikes = (page: number) => {
  const bikesQuery = useQuery({
    queryKey: [GET_ALL_BIKES_KEY, page],
    queryFn: () => getBikes(page),
    placeholderData: keepPreviousData,
  });
  return bikesQuery;
};
