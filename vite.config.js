import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  base: "/", // Changed from '/portfolio/' for root domain
  server: {
    host: "localhost",
    port: 5173,
  },
});
