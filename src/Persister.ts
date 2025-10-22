import type {
  PersistedClient,
  Persister,
} from "@tanstack/query-persist-client-core";
import { get, set, del } from "idb-keyval";

function createIDBPersister(
  idbValidKey: IDBValidKey = "reactQuery"
): Persister {
  return {
    persistClient: async (client) => {
      await set(idbValidKey, client);
    },
    restoreClient: async () => {
      return await get<PersistedClient>(idbValidKey);
    },
    removeClient: async () => {
      await del(idbValidKey);
    },
  };
}
export default createIDBPersister;
