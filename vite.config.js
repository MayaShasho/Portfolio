import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  base: 'Portfolio',
  css: {
    modules: {
      generateScopedName: (name, filename) => {
        const file = filename.split('/').slice(-1)[0].replace('.module.css', '');
        return `${file}_${name}`;
      }
    }
  }
})
