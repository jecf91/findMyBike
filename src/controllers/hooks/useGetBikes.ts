import { useQuery } from '@tanstack/react-query';
import { getBikes } from '@/controllers/queries';
import { GET_ALL_BIKES_KEY } from '@/controllers/constants/queryKeys';

export const useGetBikes = () => {
  const bikesQuery = useQuery({
    queryKey: [GET_ALL_BIKES_KEY],
    queryFn: getBikes,
  });
  return bikesQuery;
};
