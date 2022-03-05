chrome.runtime.onMessage.addListener(function (message, sender, sendResponse) {
  localStorage['nyt-wordle-state'] = message.key; //store into extension's local storage
});