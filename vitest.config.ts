import path from 'node:path';
import { defineConfig, defaultExclude } from 'vitest/config';
import configuration from './vite.config';

export default defineConfig({
  ...configuration,
  resolve: {
    alias: {
      ...configuration?.resolve?.alias,
      test: path.resolve(__dirname, './test'),
    },
  },
  test: {
    globals: true,
    setupFiles: path.resolve(__dirname, 'test/setup.ts'),
    exclude: [...defaultExclude, '**/*.svelte**'],
    environmentMatchGlobs: [
      ['**/*.test.tsx', 'jsdom'],
      ['**/*.component.test.ts', 'jsdom'],
    ],
    reporters: ["junit"],
    outputFile: {
      junit: './reports/unit/results/results.xml'
    },
    coverage: {
      provider: 'c8',
      reportsDirectory: './reports/unit/coverage',
      thresholdAutoUpdate: true,
      include: ['src/**/*'],
      exclude: [
        'test/**',
        'vite.*.ts',
        '**/*.d.ts',
        '**/*.test.*',
        '**/*.config.*',
        '**/snapshot-tests/**',
        '**/*.solution.tsx',
        '**/coverage/**',
      ],
      all: true,
    },
    // coverage: {
    //   statements: 59.79,
      
    // },
  },
});
