import { ApiInterceptors } from '@/services';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import type React from 'react';
import { BrowserRouter } from 'react-router';

interface PluginWrapperProps {
  children: React.ReactNode;
}

export const queryClient = new QueryClient();

export const PluginWrapper = ({ children }: PluginWrapperProps) => {
  return (
    <BrowserRouter>
      <QueryClientProvider client={queryClient}>
        <ApiInterceptors />
        <ReactQueryDevtools initialIsOpen={false} />
        {children}
      </QueryClientProvider>
    </BrowserRouter>
  );
};
