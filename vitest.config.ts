import { defineConfig } from "vitest/config";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  resolve: {
    alias: {
      "~/": `${__dirname}/src/`,
    },
  },
  plugins: [react()],
  test: {
    environment: "jsdom",
  },
});
