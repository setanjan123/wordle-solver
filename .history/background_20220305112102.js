chrome.runtime.onMessage.addListener(function (message, sender, sendResponse) {
  localStorage['nyt-wordle-state'] = JSON.parse(message.info); //store into extension's local storage
});