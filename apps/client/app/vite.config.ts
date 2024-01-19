/// <reference types='vitest' />
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { nxViteTsPaths } from '@nx/vite/plugins/nx-tsconfig-paths.plugin';
import { resolve } from 'path';
import { VitePWA } from 'vite-plugin-pwa';
import { pwaConfig } from './pwa/pwa-config';

export default defineConfig({
  root: __dirname,
  cacheDir: '../../../node_modules/.vite/client',

  server: {
    port: 4200,
    host: 'localhost',
  },

  preview: {
    port: 4300,
    host: 'localhost',
  },

  plugins: [
    react({
      babel: {
        presets: ['jotai/babel/preset'],
      },
    }),
    VitePWA(pwaConfig),
    nxViteTsPaths(),
  ],

  // Uncomment this if you are using workers.
  // worker: {
  //  plugins: [ nxViteTsPaths() ],
  // },

  build: {
    outDir: '../../../dist/client',
    emptyOutDir: true,
    reportCompressedSize: true,
    commonjsOptions: {
      transformMixedEsModules: true,
    },
  },

  test: {
    globals: true,
    cache: {
      dir: '../../../node_modules/.vitest',
    },
    environment: 'jsdom',
    include: ['src/**/*.{test,spec}.{js,mjs,cjs,ts,mts,cts,jsx,tsx}'],
    setupFiles: [resolve(__dirname, 'test/setup.ts')],
    reporters: ['default'],
    coverage: {
      reportsDirectory: '../../../coverage/client',
      provider: 'v8',
    },
  },
});
