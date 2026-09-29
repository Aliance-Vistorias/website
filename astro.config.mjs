import { defineConfig } from "astro/config";
import react from "@astrojs/react";
import sitemap from "@astrojs/sitemap";
import tailwindcss from "@tailwindcss/vite";

export default defineConfig({
  site: "https://aliancevistorias.com.br",
  integrations: [react(), sitemap()],
  output: "static",
  prefetch: {
    prefetchAll: true
  },
  vite: {
    plugins: [tailwindcss()],
    resolve: {
      alias: {
        "@": new URL("./src", import.meta.url).pathname
      }
    }
  }
});
