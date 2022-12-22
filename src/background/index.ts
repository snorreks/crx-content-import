const initialize = () => {
	chrome.runtime.onMessage.addListener((message, _sender, sendResponse) => {
		if(message === 'test') {
			sendResponse('test');
		}
	});

	console.log('Background script initialized');
};

initialize();

export {}