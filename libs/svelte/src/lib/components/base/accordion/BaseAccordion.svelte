<script context="module">
	export const EXPANSION_PANELS = {};
</script>

<script lang="ts">
	import { createEventDispatcher, setContext } from 'svelte';
	import { writable } from 'svelte/store';
	import { cssAccordionVariables } from '../../../utils/use-css-variables';

	/**
	 * Indexes of the active panels
	 *
	 * @default [ ]
	 */
	export let value: number[] = [];

	/**
	 * Allow multiple panels to be active at once
	 *
	 * @default false
	 */
	export let multiple = false;

	/**
	 * Make is necessary for at least one panel to be selected
	 *
	 * @default false
	 */
	export let mandatory = false;

	const dispatch = createEventDispatcher();
	const values = writable(value);
	let startIndex = -1;

	$: values.set(value);

	setContext(EXPANSION_PANELS, {
		values,

		selectPanel: (index: number) => {
			if (value.includes(index)) {
				if (!(mandatory && value.length === 1)) {
					value.splice(value.indexOf(index), 1);
					value = value;

					dispatch('change', { index, active: false });
				}
			} else {
				if (multiple) {
					value.push(index);
					value = value;
				} else {
					value = [index];
				}

				dispatch('change', { index, active: true });
			}
		},
		index: () => {
			startIndex += 1;
			return startIndex;
		},
	});
</script>

<div class="mv-expansion-panels {$$props.class}" use:cssAccordionVariables>
	<slot />
</div>

<style lang="scss" src="./style.scss" global>
</style>
