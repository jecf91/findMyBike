import { useQuery } from '@tanstack/react-query';
import { getBike } from '@/controllers/queries';
import { GET_BIKE } from '@/controllers/constants/queryKeys';

export const useGetBike = (id: string) => {
  const bikesQuery = useQuery({
    queryKey: [GET_BIKE, id],
    queryFn: () => getBike(id),
  });
  return bikesQuery;
};
