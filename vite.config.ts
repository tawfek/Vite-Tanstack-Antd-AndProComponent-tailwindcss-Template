import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { tanstackRouter } from "@tanstack/router-plugin/vite";
import tailwindcss from "@tailwindcss/vite";
import { VitePWA } from "vite-plugin-pwa";
import path from "path";

// https://vite.dev/config/
export default defineConfig({
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  plugins: [
    tanstackRouter({
      target: "react",
      autoCodeSplitting: true,
    }),
    react({
      babel: {
        plugins: [["babel-plugin-react-compiler"]],
      },
    }),
    tailwindcss(),
    VitePWA({
      registerType: "autoUpdate",
      includeAssets: ["/favicon.ico", "/robots.txt", "/apple-touch-icon.png"],
      manifest: {
        name: "Denary - ديناري",
        short_name: "Denary",
        start_url: "/",
        display: "standalone",
        background_color: "#ffffff",
        theme_color: "#65ac64",
        icons: [
          { src: "/icons/logo-48x48.png", sizes: "48x48", type: "image/png" },
          { src: "/icons/logo-72x72.png", sizes: "72x72", type: "image/png" },
          { src: "/icons/logo-96x96.png", sizes: "96x96", type: "image/png" },
          {
            src: "/icons/logo-128x128.png",
            sizes: "128x128",
            type: "image/png",
          },
          {
            src: "/icons/logo-144x144.png",
            sizes: "144x144",
            type: "image/png",
          },
          {
            src: "/icons/logo-152x152.png",
            sizes: "152x152",
            type: "image/png",
          },
          {
            src: "/icons/logo-192x192.png",
            sizes: "192x192",
            type: "image/png",
          },
          {
            src: "/icons/logo-256x256.png",
            sizes: "256x256",
            type: "image/png",
          },
          {
            src: "/icons/logo-384x384.png",
            sizes: "384x384",
            type: "image/png",
          },
          {
            src: "/icons/logo-512x512.png",
            sizes: "512x512",
            type: "image/png",
            purpose: "any maskable",
          },
        ],
      },
    }),
  ],
});
