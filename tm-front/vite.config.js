import { fileURLToPath, URL } from "node:url";

import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import { VitePWA } from "vite-plugin-pwa";
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    VitePWA({
      registerType: "autoUpdate",
      devOptions: {
        enabled: true,
      },
      injectRegister: "auto",
      workbox: {
        cleanupOutdatedCaches: true,
        globPatterns: ["**/*.{js,css,html,svg,vue,json,png,jpg,woff2}"],
      },
      includeAssets: ["favicon.ico", "robots.txt", "apple-touch-icon.png"],
      manifest: {
        name: "tm-front",
        short_name: "tm-front",
        icons: [
          {
            src: "/assets/LOGO_Pooger-0b18b857.svg",
            sizes: "106x150",
            type: "image/svg+xml",
          },
          {
            src: "/assets/LOGO_Pooger_square-13719b0c.svg",
            sizes: "150x150",
            type: "image/svg+xml",
          },
        ],
        id: "com.tm-front",
        start_url: "/landing-page",
        background_color: "#EE74DA",
        display: "standalone",
        scope: "/",
        theme_color: "#EE74DA",
        description: "Time Manager",
        screenshots: [
          {
            src: "/assets/POOGER-6aefc80b.png",
            type: "image/png",
            sizes: "462x507",
            form_factor: "wide",
          },
          {
            src: "/assets/POOGER-6aefc80b.png",
            type: "image/png",
            sizes: "462x507",
            form_factor: "narrow",
          },
        ],
      },
    }),
  ],
  resolve: {
    alias: {
      "@": fileURLToPath(new URL("./src", import.meta.url)),
    },
  },
});
