import { useQuery } from '@tanstack/react-query';
import { request } from '../utils/api';

export const useGetData = <T>(url: string, params?: object) => {
  return useQuery<T>({
    queryKey: [url, params],
    queryFn: () => request<T>(url, { method: 'GET', params }),
  });
};
