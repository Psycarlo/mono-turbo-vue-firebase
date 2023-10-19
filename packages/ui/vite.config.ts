import vue from '@vitejs/plugin-vue'
import path from 'path'
import { defineConfig } from 'vite'
import dts from 'vite-plugin-dts'

export default defineConfig({
  plugins: [vue(), dts({ cleanVueFileName: true })],
  build: {
    lib: {
      entry: path.resolve(__dirname, 'src/index.ts'),
      name: 'ui',
      fileName: 'index'
    },
    rollupOptions: {
      external: ['vue'],
      output: {
        globals: {
          vue: 'Vue'
        },
        assetFileNames: (chunkInfo) => {
          if (chunkInfo.name === 'style.css') return 'index.css'
          return chunkInfo.name as string
        }
      }
    }
  }
})
