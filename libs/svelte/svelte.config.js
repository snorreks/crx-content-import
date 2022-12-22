import { dirname, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';
import preprocess from 'svelte-preprocess';

const __dirname = dirname(fileURLToPath(import.meta.url)); // jshint ignore:line

/** @type {import('@sveltejs/kit').Config} */
const config = {
	kit: {
		vite: () => ({
			resolve: {
				alias: {
					// eslint-disable-next-line sort-keys
					$types: resolve(__dirname, './src/lib/types'),
					$utils: resolve(__dirname, './src/lib/utils'),
				},
			},
		}),
	},
	// Consult https://github.com/sveltejs/svelte-preprocess
	// for more information about pre processors
	preprocess: [
		preprocess({
			// WARNING: Mandatory for the postcss config (postcss.config.cjs) and Tailwind to be loaded
			postcss: false,
			// preserve: ['ld+json'],
			scss: {
				// includePaths: ['./src/styles'],
				// prependData: `@import 'src/styles/variables/index.scss';`,
				outputStyle: 'compressed',
			},
			typescript: true,
		}),
	],
};

export default config;
