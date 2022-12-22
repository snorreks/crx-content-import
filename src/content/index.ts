const initialize = async () => {
  console.log("%C Hello from content script!", "color: green; font-size: 20px");

  chrome.runtime.onMessage.addListener(async (request, _, sendResponse) => {
    if (request.message === "open_recording_dialog") {
      try {
        const showTestComponent = (await import("./test")).default;
        showTestComponent();
      } catch (error) {
        sendResponse({ success: false, error });
      }
    }
  });
};

initialize();

export {};
