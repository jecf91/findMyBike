import { ApiInterceptors } from '@/services';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import type React from 'react';

interface PluginWrapperProps {
  children: React.ReactNode;
}

export const queryClient = new QueryClient();

export const PluginWrapper = ({ children }: PluginWrapperProps) => {
  return (
    <QueryClientProvider client={queryClient}>
      <ApiInterceptors />
      <ReactQueryDevtools initialIsOpen={false} />
      {children}
    </QueryClientProvider>
  );
};
