import { useQuery } from "@tanstack/react-query";
import { ActivitiesApiRoutes } from "backend";
import { hc } from "hono/client";

const client = hc<ActivitiesApiRoutes>("http://localhost:8787");

export function useActivites() {
	return useQuery({
		queryKey: ["activities"],
		queryFn: async () => {
			const res = await client.activities.$get();

			if (res.ok) {
				return await res.json();
			} else {
				return Promise.reject(new Error(res.status.toString()));
			}
		},
	});
}
