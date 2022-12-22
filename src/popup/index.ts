import Popup from './index.svelte';

const target = document.getElementById('app');

function render() {
	if (!target) {
		throw new Error('Could not find target element');
	}

	new Popup({ target });
}

document.addEventListener('DOMContentLoaded', render);
