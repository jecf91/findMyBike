import { useEffect } from 'react';
import { apiInstance } from '../api';

export const ApiInterceptors = () => {
  useEffect(() => {
    const responseInterceptor = apiInstance.interceptors.response.use(
      async (response) => {
        return response;
      }
    );

    const requestInterceptor = apiInstance.interceptors.request.use(
      async (config) => {
        const controller = new AbortController();
        return { ...config, signal: controller.signal };
      },
      (error) => {
        return Promise.reject(error as Error);
      }
    );

    return () => {
      apiInstance.interceptors.response.eject(responseInterceptor);
      apiInstance.interceptors.request.eject(requestInterceptor);
    };
  }, []);

  return null;
};
