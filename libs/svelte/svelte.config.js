/* jshint esversion: 9 */
import { dirname, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';
import preprocess from 'svelte-preprocess';
import { windi } from 'svelte-windicss-preprocess';

const __dirname = dirname(fileURLToPath(import.meta.url)); // jshint ignore:line

/** @type {import('@sveltejs/kit').Config} */
const config = {
	kit: {
		vite: () => ({
			resolve: {
				alias: {
					'@shared/constants': resolve(
						__dirname,
						'../../../libs/shared/constants/src',
					),
					'@shared/frontend/utils': resolve(
						__dirname,
						'../../../libs/shared/frontend/utils/src',
					),
					'@shared/svelte': resolve(
						__dirname,
						'../../../libs/shared/svelte/src',
					),
					'@shared/types': resolve(
						__dirname,
						'../../../libs/shared/types/src',
					),
					'@shared/utils': resolve(
						__dirname,
						'../../../libs/shared/utils/src',
					),
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
		windi({}),
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
