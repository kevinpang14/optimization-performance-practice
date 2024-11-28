import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  // tree shaking
  teserOptions: {
    compress: {
      drop_console: true, // remove console.log
      drop_debugger: true, // remove debugger
    },
  },
  build: {
    minify: "esbuild", // support tree shaking
  },
});
