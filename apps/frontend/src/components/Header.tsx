import { styled } from "@macaron-css/react";
import { Link } from "@tanstack/react-router";
import { vars } from "../styles";

const HeaderContainer = styled("header", {
	base: {
		paddingLeft: vars.space.lg,
		paddingRight: vars.space.lg,
		paddingTop: vars.space.md,
		paddingBottom: vars.space.md,

		backgroundColor: vars.color.back.brand,

		position: "sticky",
		top: 0,
	},
});

const StyledLink = styled(Link, {
	base: {
		display: "flex",
		gap: vars.space.md,
		alignItems: "center",
		textDecoration: "none",
	},
});

const BrandLogo = styled("img", {
	base: {
		width: vars.size.icon,
		height: vars.size.icon,
	},
});

const BrandName = styled("span", {
	base: {
		fontSize: vars.size.xl,
		color: vars.color.fore.brand,
	},
});

function Header() {
	return (
		<HeaderContainer>
			<StyledLink to="/">
				<BrandLogo src="/logo.svg" />
				<BrandName>etiquette</BrandName>
			</StyledLink>
		</HeaderContainer>
	);
}

export default Header;
