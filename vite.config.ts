import path from 'node:path';
import { defineConfig, UserConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
const configuration: UserConfig = {
  plugins: [react()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
      $lib: path.resolve(__dirname, './src/lib'),
      $components: path.resolve(__dirname, './src/components'),
    },
  },
  test: {
    globals: true,
    reporters: ["junit"],
    outputFile: 'reports/unit/results/results.xml',
    coverage: {
      provider: 'v8',
      reportsDirectory: 'reports/unit/coverage',
      include: ['src/examples/*'],
    },
  }
};

export default configuration;
