<script>
  import { Test } from "$components";

  const openRecordingDialog = () => {
		chrome.tabs.query({ active: true, currentWindow: true }, ([tab]) => {
      if (!tab) {
        return;
      }

			chrome.tabs.sendMessage(
				tab.id,
				{ message: 'open_recording_dialog' }
			);

      window.close();
		});
	}
</script>

<button on:click={openRecordingDialog}>Open Dialog</button>

<style>
  button {
    background: rgba(8, 46, 71, 0.918);
    color: azure;
    border-radius: 4px;
    padding: 8px 16px;
    margin: 16px;
    font-size: 16px;
    font-weight: 600;
    cursor: pointer;
  }
</style>
