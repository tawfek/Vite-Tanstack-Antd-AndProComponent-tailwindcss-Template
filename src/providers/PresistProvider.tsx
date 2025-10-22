import { type ReactNode } from "react";
import { PersistQueryClientProvider } from "@tanstack/react-query-persist-client";
import { QueryClient, useIsRestoring } from "@tanstack/react-query";
import { Spin } from "antd";
import { createAsyncStoragePersister } from "@tanstack/query-async-storage-persister";

// Create the QueryClient
const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      gcTime: 1000 * 60 * 60 * 24, // 24h
      staleTime: 2000,
      retry: 0,
    },
  },
});

const persister = createAsyncStoragePersister({
  storage: window.localStorage,
});
function PresistProvider({ children }: { children: ReactNode }) {
  const isRestoring = useIsRestoring();

  if (isRestoring) {
    return (
      <div className="w-full h-full flex justify-center place-items-center min-h-[100vh] overflow-hidden">
        <Spin spinning />
      </div>
    );
  }

  return (
    <PersistQueryClientProvider
      client={queryClient}
      persistOptions={{ persister }}
      onSuccess={() => {
        // resume mutations after initial restore from localStorage was successful
        queryClient.resumePausedMutations().then(() => {
          queryClient.invalidateQueries();
        });
      }}
    >
      {children}
    </PersistQueryClientProvider>
  );
}

export default PresistProvider;
