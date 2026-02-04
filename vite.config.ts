import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
import fs from "fs";
import { componentTagger } from "lovable-tagger";

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => ({
  server: (() => {
    const host = "::";
    const port = 8081;

    const keyPath = path.resolve(__dirname, "./certs/localhost-key.pem");
    const certPath = path.resolve(__dirname, "./certs/localhost.pem");

    let https: false | { key: Buffer; cert: Buffer } = false;

    try {
      if (fs.existsSync(keyPath) && fs.existsSync(certPath)) {
        https = {
          key: fs.readFileSync(keyPath),
          cert: fs.readFileSync(certPath),
        };
      } else {
        console.warn(`Local dev certs not found at ${keyPath} and ${certPath}. Starting dev server without HTTPS.`);
      }
    } catch (err) {
      console.warn("Error reading local certs, starting dev server without HTTPS:", err);
      https = false;
    }

    return {
      host,
      port,
      https,
      hmr: {
        overlay: false,
      },
    };
  })(),
  plugins: [react(), mode === "development" && componentTagger()].filter(Boolean),
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
}));
