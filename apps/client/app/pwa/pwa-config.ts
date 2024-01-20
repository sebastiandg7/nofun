import { VitePWAOptions } from 'vite-plugin-pwa';
import { manifestOptions } from './manifest-options';

export const pwaConfig: Partial<VitePWAOptions> = {
  injectRegister: 'auto',
  registerType: 'prompt',
  strategies: 'generateSW',
  manifest: {
    ...manifestOptions,
  },
  workbox: {
    globPatterns: ['**/*.{js,css,html,ico,png,svg,mp3}'],
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
