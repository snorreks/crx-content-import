<script lang="ts">
	import clsx from 'clsx';

	/**
	 * Sets the divider to full width
	 * @type {boolean}
	 * @default true
	 */
	export let fullWidth = true;

	const classes = clsx({
		'w-full': fullWidth,
		'bg-dark-100 h-px': true,
	});
</script>

<div class="{classes} {$$props.class}" />

<!-- <style lang="scss">
	div {
		opacity: 1;
	}
</style> -->