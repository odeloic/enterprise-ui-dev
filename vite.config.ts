import path from 'node:path';
import { defineConfig, UserConfig } from 'vitest/config';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
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
    outputFile: {
      junit: './reports/unit/results/results.xml'
    },
    coverage: {
      provider: 'c8',
      reportsDirectory: './reports/unit/coverage',
      include: ['src/*'],
    },
  }
})

