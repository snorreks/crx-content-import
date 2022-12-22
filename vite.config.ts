import { crx } from '@crxjs/vite-plugin';
import { svelte } from '@sveltejs/vite-plugin-svelte';
import { dirname, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';
import { defineConfig, type UserConfig } from 'vite';

import manifest from './manifest.config';

const directory = dirname(fileURLToPath(import.meta.url));

export default defineConfig(() => {
	const config: UserConfig = {
		plugins: [
			svelte(),
			crx({ manifest }),
		],
		resolve: {
			alias: {
				$components: resolve(directory, './src/lib/components'),
				$utils: resolve(directory, './src/lib/utils'),
			},
		},
	};
	return config;
});
