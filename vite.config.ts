import { defineConfig } from 'vite'
import { minifyEs } from './src/scripts/minify-es'
import vue from '@vitejs/plugin-vue'

export default defineConfig({
	plugins: [
    minifyEs(),
    vue()
  ],
	server: {
		port: 2024,
	}
})
