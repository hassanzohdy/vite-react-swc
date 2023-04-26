import mongezVite from "@mongez/vite";
// import react from "@vitejs/plugin-react";
import react from "@vitejs/plugin-react-swc";
import { defineConfig } from "vite";

// https://vitejs.dev/config/
export default defineConfig(() => ({
  plugins: [mongezVite(), react()],
  envPrefix: "APP_",
}));
