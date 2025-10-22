import { useState, useEffect, type ReactNode } from "react";
import { PersistQueryClientProvider } from "@tanstack/react-query-persist-client";
import { QueryClient, hydrate } from "@tanstack/react-query";
import createIDBPersister from "./Persister";
import { Spin } from "antd";

// Create the QueryClient
const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      gcTime: 1000 * 60 * 60 * 24, // 24h
    },
  },
});

// Create the IndexedDB persister
const persister = createIDBPersister("denary-query-cache");

// Stub for queued mutations
function resumeQueuedMutations() {
  console.log("Resuming queued offline mutations...");
}

function PersistWrapper({ children }: { children: ReactNode }) {
  const [isRestoring, setIsRestoring] = useState(true);

  useEffect(() => {
    const restore = async () => {
      const restoredClient = await persister.restoreClient();
      if (restoredClient) {
        // Use the hydrate function from react-query
        hydrate(queryClient, restoredClient);
      }
      setIsRestoring(false);
      resumeQueuedMutations();
    };

    restore();
  }, []);

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
    >
      {children}
    </PersistQueryClientProvider>
  );
}

export default PersistWrapper;
