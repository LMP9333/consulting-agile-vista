// import { defineConfig } from "vite";
// import react from "@vitejs/plugin-react-swc";
// import path from "path";

// // https://vitejs.dev
// export default defineConfig({
//   base: '/consulting-agile-vista/',
//   server: {
//     host: "::",
//     port: 8080,
//   },
//   plugins: [react()],
//   resolve: {
//     alias: {
//       "@": path.resolve(__dirname, "./src"),
//     },
//   },
// });

import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
import fs from "fs";

export default defineConfig({
  base: '/consulting-agile-vista/',
  server: {
    host: "::",
    port: 8080,
  },
  plugins: [
    react(),
    {
      name: 'generate-404',
      closeBundle() {
        // Copy index.html to 404.html in the output directory for GitHub Pages fallback
        const distDir = path.resolve(__dirname, 'dist');
        const indexFile = path.resolve(distDir, 'index.html');
        const fallbackFile = path.resolve(distDir, '404.html');
        
        if (fs.existsSync(indexFile)) {
          fs.copyFileSync(indexFile, fallbackFile);
          console.log(' Successfully generated 404.html fallback for GitHub Pages.');
        }
      }
    }
  ],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
});
