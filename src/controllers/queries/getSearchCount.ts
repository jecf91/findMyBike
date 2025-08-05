import { apiInstance } from '@/services';
import { type SearchCount } from '@/models';
import { BASE_QUERY_PARAMS } from '@/constants';

const url = `search/count?${BASE_QUERY_PARAMS}`;

export const getSearchCount = async () => {
  const response = await apiInstance.get<SearchCount>(url);
  return response.data;
};
