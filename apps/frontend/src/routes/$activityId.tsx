import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/$activityId")({
	component: RouteComponent,
});

function RouteComponent() {
	return <div>Hello "/$activityId"!</div>;
}
