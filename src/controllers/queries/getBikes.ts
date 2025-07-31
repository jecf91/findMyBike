import { apiInstance } from '@/services';
import { type Bikes } from '@/models';

const url =
  'search?page=1&per_page=25&location=Berlin&distance=10&stolenness=proximity';

export const getBikes = async () => {
  const response = await apiInstance.get<Bikes>(url);
  return response.data.bikes;
};
