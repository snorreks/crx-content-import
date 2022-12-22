
const initialize = async () => {
	const showTestComponent = (await import('./test')).default;
	showTestComponent();
};

initialize();

export {}