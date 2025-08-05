import { apiInstance } from '@/services';
import { type Bikes } from '@/models';
import { BASE_QUERY_PARAMS } from '@/constants';

export const getBikes = async (page: number = 1) => {
  const url = `search?page=${page}&per_page=10&${BASE_QUERY_PARAMS}`;

  const response = await apiInstance.get<Bikes>(url);
  return response.data.bikes;
};
