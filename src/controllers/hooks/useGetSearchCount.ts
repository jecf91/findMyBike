import { useQuery } from '@tanstack/react-query';
import { getSearchCount } from '@/controllers/queries';
import { GET_SEARCH_COUNT } from '@/controllers/constants/queryKeys';

export const useGetSearchCount = () => {
  const searchCountQuery = useQuery({
    queryKey: [GET_SEARCH_COUNT],
    queryFn: getSearchCount,
  });
  return searchCountQuery;
};
