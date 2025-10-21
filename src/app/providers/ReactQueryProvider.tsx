
'use client'

import React, { ReactNode, useState } from 'react';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';


interface QueryProviderProps {
      children: ReactNode;
}

const QueryProvider: React.FC<QueryProviderProps> = ({ children }) => {
      const [queryClient] = useState(() => new QueryClient({
            defaultOptions: {
                  queries: {
                        refetchInterval: false,
                        gcTime: 1000 * 60 * 10,
                        staleTime: 1000 * 60 * 10,
                        refetchOnWindowFocus: false,
                        retry: 3
                  },

            },
      }));
      return (
            <QueryClientProvider client={queryClient}>
                  {children}
            </QueryClientProvider>
      );
};

export default QueryProvider;
