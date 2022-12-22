import preprocess from 'svelte-preprocess';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	preprocess: [
		preprocess({
			postcss: false,
			scss: {
				outputStyle: 'compressed',
			},
			typescript: true,
		}),
	],
};

export default config;
