import { apiInstance } from '@/services';
import { type BikeResponse } from '@/models';

export const getBike = async (id: string) => {
  const url = `bikes/${id}`;

  const response = await apiInstance.get<BikeResponse>(url);
  return response.data.bike;
};
