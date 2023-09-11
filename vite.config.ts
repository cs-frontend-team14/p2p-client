import { fileURLToPath, URL } from 'node:url'

// @ts-ignore
import { defineConfig } from 'vite'
// @ts-ignore
import vue from '@vitejs/plugin-vue'
// @ts-ignore
import vueJsx from '@vitejs/plugin-vue-jsx'
import {resolve} from "path";

// https://vitejs.dev/config/
export default defineConfig({

  plugins: [
    vue({
        script: {
          defineModel: true,
          propsDestructure: true
        }
      }),
    vueJsx(),
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url)),
      '~': resolve(__dirname, 'src')

    }
  }
})
