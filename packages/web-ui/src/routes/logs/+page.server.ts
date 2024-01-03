import trpc from "$lib/server/trpcClient";
import type { PageServerLoad } from "./$types";

export const load: PageServerLoad = async () => {
  return {
    logs: await trpc.logsGet.query({ limit: 50, offset: 0 }),
  };
};
