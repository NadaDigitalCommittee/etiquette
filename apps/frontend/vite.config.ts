import { defineConfig } from "vite";

import tsconfigPaths from "vite-tsconfig-paths";
import { TanStackRouterVite } from "@tanstack/router-plugin/vite";
import { macaronVitePlugin } from "@macaron-css/vite";
import react from "@vitejs/plugin-react-swc";

// https://vite.dev/config/
export default defineConfig({
	plugins: [
		tsconfigPaths(),
		TanStackRouterVite({
			target: "react",
			autoCodeSplitting: true,
		}),
		macaronVitePlugin(),
		react(),
	],
});
