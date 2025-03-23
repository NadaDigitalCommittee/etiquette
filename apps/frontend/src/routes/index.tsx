import { style } from "@macaron-css/core";
import { createFileRoute } from "@tanstack/react-router";
import Card from "../components/Card";
import { vars } from "../styles";
import { useActivites } from "../queries/activities";

const styles = {
	list: style({
		display: "grid",

		padding: vars.space.md,
		margin: "0 auto",

		"@media": {
			"(60rem >= width)": {
				gridTemplateColumns: "repeat(1, minmax(0, 1fr))",
				width: "100%",
				gap: vars.space.md,
			},
			"(width > 60rem)": {
				gridTemplateColumns: "repeat(2, minmax(0, 1fr))",
				width: "60rem",
				gap: vars.space.lg,
			},
		},
	}),
	card: style({}),
};

export const Route = createFileRoute("/")({
	component: RouteComponent,
});

function RouteComponent() {
	const { isSuccess, data: dummyData } = useActivites();
	return isSuccess ? (
		<div className={styles.list}>
			{dummyData.map((data) => (
				<Card
					slug={data.slug}
					name={data.name}
					description={data.description}
					capacity={{
						first: data.capacity.first,
						second: data.capacity.second,
					}}
					key={data.slug}
				/>
			))}
		</div>
	) : (
		<></>
	);
}
