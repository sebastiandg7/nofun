import { VitePWAOptions } from 'vite-plugin-pwa';
import { manifestOptions } from './manifest-options';

export const pwaConfig: Partial<VitePWAOptions> = {
  injectRegister: 'auto',
  registerType: 'autoUpdate',
  strategies: 'generateSW',
  manifest: {
    ...manifestOptions,
  },
  workbox: {
    globPatterns: ['**/*.{js,css,html,ico,png,svg}'],
    cleanupOutdatedCaches: true,
    cacheId: 'nofun-cache',
  },
  devOptions: {
    enabled: process.env.SW_DEV === 'true',
    /* when using generateSW the PWA plugin will switch to classic */
    type: 'module',
    navigateFallback: 'index.html',
  },
};
