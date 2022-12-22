import { Test } from '$components';

const overlayTargetId = 'test';

export default () => {
	const target =
		document.querySelector(`#${overlayTargetId}`) ||
		document.createElement('div');

	document.body.appendChild(target);
	target.innerHTML = '';
	target.id = overlayTargetId;
	new Test({ target });
};
