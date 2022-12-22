import { defineManifest } from '@crxjs/vite-plugin';

export default defineManifest(() => ({
	manifest_version: 3,
	version: '0.0.1',
	name: 'Content Example',
	content_scripts: [
		{
			matches: ['https://*/*'],
			js: ['src/content/index.ts'],
		},
	],
	action: {
		default_popup: 'src/popup/popup.html',
	},
	background: {
		service_worker: 'src/background/index.ts',
		type: 'module',
	},
}));
