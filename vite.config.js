import mkcert from "vite-plugin-mkcert"
import { defineConfig } from 'vite';


export default defineConfig({
	plugins: [
		mkcert()
	],
	server: {
		https: true,
		proxy: {}, // essential to avoid "can't use Symbol where you need a string" error
	},
})
