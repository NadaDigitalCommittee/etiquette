import { style } from "@macaron-css/core";
import { styled } from "@macaron-css/react";
import { Link } from "@tanstack/react-router";
import { vars } from "../styles";

const styles = {
	__todo_logo: style({
		width: "2.4rem",
		height: "2.4rem",
		backgroundColor: "#666666",
	}),
	name: style({
		fontSize: "1.4rem",
	}),
};

type CardProps = {
	slug: string;
	name: string;
	description: string;

	capacity: {
		first: number;
		second: number;
	};
};

const StyledLink = styled(Link, {
	base: {
		textDecoration: "none",
		color: "#000",

		display: "grid",
		boxShadow: "0 2px 4px rgba(0, 0, 0, 0.2)",

		gap: vars.space.sm,

		padding: vars.size.lg,

		borderRadius: vars.size.md,

		backgroundColor: vars.color.back.primary,

		gridTemplateRows: "subgrid",
		gridRow: "span 3",
	},
});

const CardHeader = styled("div", {
	base: {
		display: "flex",
		alignItems: "center",
		gap: vars.space.md,
	},
});

const CardDescription = styled("span", {
	base: {
		fontSize: "0.8rem",
		color: vars.color.fore.secondary,
	},
});

const CardDetails = styled("div", {
	base: {
		display: "gap",
		flexDirection: "column",
		gap: "0.6rem",
	},
});

const ColumnHeader = styled("span", {
	base: {
		fontSize: "1rem",
		fontWeight: "600",
	},
});

const ColumnContent = styled("div", {
	base: {
		display: "grid",
		gridTemplateColumns: "repeat(2, minmax(0, 1fr))",
		gap: vars.space.xl,

		padding: vars.space.md,
	},
});

const ColumnItem = styled("div", {
	base: {
		display: "grid",
		gridTemplateColumns: "repeat(2, minmax(0, 1fr))",
	},
});

const ColumnName = styled("span", {
	base: {
		fontSize: vars.size.lg,
		fontWeight: 600,
	},
});

const ColumnValue = styled("span", {
	base: {
		justifySelf: "end",
	},
});

function Card({
	slug,
	name,
	description,
	capacity: { first, second },
}: CardProps) {
	return (
		<StyledLink to={slug}>
			<CardHeader>
				<div className={styles.__todo_logo} />
				<h2 className={styles.name}>{name}</h2>
			</CardHeader>
			<CardDescription>{description}</CardDescription>
			<CardDetails>
				<ColumnHeader>枠数</ColumnHeader>
				<ColumnContent>
					<ColumnItem>
						<ColumnName>1日目</ColumnName>
						<ColumnValue>{first}名</ColumnValue>
					</ColumnItem>
					<ColumnItem>
						<ColumnName>2日目</ColumnName>
						<ColumnValue>{second}名</ColumnValue>
					</ColumnItem>
				</ColumnContent>
			</CardDetails>
		</StyledLink>
	);
}

export default Card;
