import { Outlet, createRootRoute } from "@tanstack/react-router";
import Header from "../components/Header";
import { style } from "@macaron-css/core";
import { vars } from "../styles";

export const Route = createRootRoute({
	component: RootComponent,
});

const styles = {
	layout: style({
		width: "100dvw",
		height: "100dvh",
		display: "flex",
		flexDirection: "column",
	}),
	content: style({
		padding: "0.3rem",
		backgroundColor: vars.color.back.secondary,
		flexGrow: 1,
		flexShrink: 1,
	}),
};

function RootComponent() {
	return (
		<div className={styles.layout}>
			<Header />
			<main className={styles.content}>
				<Outlet />
			</main>
		</div>
	);
}
