<script lang="ts">
	import { getContext } from 'svelte';
	import { slide } from 'svelte/transition';
	import Icon from '../icon/BaseIcon.svelte';
	import { EXPANSION_PANELS } from './BaseAccordion.svelte';

	const { values, selectPanel, index } = getContext(EXPANSION_PANELS);

	/**
	 * Make the panel disabled
	 *
	 * @default false
	 */
	export let disabled = false;

	/**
	 * Make the panel readonly
	 *
	 * @default false
	 */
	export let readonly = false;

	const value = index();
	const toggle = () => selectPanel(value);

	let active = false;

	$: active = $values.includes(value);
</script>

<div
	class="mv-expansion-panel {$$props.class}"
	aria-expanded={active}
	class:readonly
	class:disabled>
	<button
		type="button"
		class="mv-expansion-panel__header"
		tabindex={disabled ? -1 : null}
		on:click|preventDefault={toggle}>
		<slot name="header" />

		<div class="mv-expansion-panel__icon">
			<Icon name="chevron" rotate={active ? 180 : 0} />
		</div>
	</button>

	{#if active}
		<div class="mv-expansion-panel__content" transition:slide|local>
			<slot />
		</div>
	{/if}
</div>

<!--
@component
The base accordion item component.
- usage:

	```svelte
	<AccordionItem>
		<slot name="header" />

		<slot />
	</Card>
	```
-->
