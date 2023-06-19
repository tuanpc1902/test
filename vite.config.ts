import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc';
import { resolve } from 'path';

// https://vitejs.dev/config/

const projectRootDir = resolve(__dirname);

export default defineConfig({
  plugins: [react()],resolve: {
    alias: {
      '~': resolve(projectRootDir, 'src'),
    },
  },
})
