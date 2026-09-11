import adapter from '@sveltejs/adapter-static';
import { vitePreprocess } from '@sveltejs/vite-plugin-svelte';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	preprocess: vitePreprocess(),

	kit: {
		// Fully static output -> can be served from any static host,
		// including GitHub Pages.
		adapter: adapter({
			pages: 'build',
			assets: 'build',
			fallback: undefined,
			precompress: false,
			strict: true
		}),
		// GitHub Pages project sites are served from /<repo-name>/.
		// Set BASE_PATH="/<repo-name>" when building for that case
		// (see .env.example / the deploy workflow).
		paths: {
			base: process.env.BASE_PATH ?? ''
		}
	}
};

export default config;
