import { defineConfig } from 'vite'
import path from 'path';

import react from '@vitejs/plugin-react-swc';
// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@app': path.resolve(__dirname, 'app'),
      '@components': path.resolve(__dirname, 'src/components'),
      '@styles': path.resolve(__dirname, 'src/app/styles/'),
      '@hooks': path.resolve(__dirname, 'src/hooks'),
      '@router': path.resolve(__dirname, 'src/app/router'),
      '@assets': path.resolve(__dirname, 'src/app/assets'),
      '@atoms': path.resolve(__dirname, 'src/components/atoms'),
      '@layouts': path.resolve(__dirname, 'src/app/layouts'),
      '@utils': path.resolve(__dirname, 'src/utils'),
      '@store': path.resolve(__dirname, 'src/store'),
      '@types': path.resolve(__dirname, 'src/types'),

    },
  },
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: `@use "@styles/base/breakpoints.scss" as *;`,
      },
    },
  },
})
