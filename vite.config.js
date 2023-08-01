// Import the defineConfig function from the Vite module.
import { defineConfig } from 'vite';

// Import the react plugin from the @vitejs namespace.
import react from '@vitejs/plugin-react';

// Import the dirname and fileURLToPath functions from the path and url modules, respectively.
import { dirname } from 'path';
import { fileURLToPath } from 'url';

// Import the tailwindcss module.
import tailwindcss from 'tailwindcss';

// Get the directory name of the current module file.
const __dirname = dirname(fileURLToPath(import.meta.url));

// Export the Vite configuration object as the default export of this module.
export default defineConfig({
  // Set the plugins property to an array containing the react plugin.
  plugins: [react()],

  // Set the resolve property to an object containing an alias property.
  resolve: {
    alias: {
      '@': `${__dirname}/src`,
    },
  },

  // Set the css property to an object containing two properties: postcss and modules.
  css: {
    postcss: {
      // Add the tailwindcss plugin to the plugins array.
      plugins: [tailwindcss],
    },
    modules: {
      // Use a custom format for generating scoped class names.
      generateScopedName: '[name]__[local]___[hash:base64:5]',
    },
  },

  // Set the server property to an object containing two properties: port and proxy.
  server: {
    // Set the port number that the Vite development server will listen on.
    port: 3000,
    // Configure a proxy for requests to a backend API.
    proxy: {
      '/api': {
        // Set the target URL for the proxy.
        target: 'http://localhost:8080',
        // Modify the request headers to include the target host.
        changeOrigin: true,
        // Rewrite the request URL to remove the /api prefix.
        rewrite: (path) => path.replace(/^\/api/, ''),
      },
    },
  },
});
