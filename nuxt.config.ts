import path from 'path';

import type { NuxtConfig } from '@nuxt/types';

const config: NuxtConfig = {
  head() {
    return this.$nuxtI18nHead({
      addSeoAttributes: true,
      addDirAttribute: true
    });
  },
  css: ['~/styles/tailwind.css'],
  buildModules: [
    '@nuxtjs/i18n'
  ],
  i18n: {
    locales: [
      { code: 'en', iso: 'en-US', file: 'en.json', dir: 'ltr' },
      { code: 'ar', iso: 'ar-EG', file: 'ar.json', dir: 'rtl' }
    ],
    langDir: 'locales',
    defaultLocale: 'en',
    detectBrowserLanguage: false
  },
  build: {
    friendlyErrors: false,
    postcss: {
      postcssOptions: {
        preset: {
          stage: 2,
          features: {
            'logical-properties-and-values': false
          }
        },
        plugins: {
          tailwindcss: {
            config: path.resolve(__dirname, 'tailwind.config.js')
          }
        }
      }
    }
  }
}

export default config;
