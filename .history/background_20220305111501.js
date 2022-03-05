chrome.runtime.onMessage.addListener(function (message, sender, sendResponse) {
  console.log(message)
  localStorage['nyt-wordle-state'] = message.key; //store into extension's local storage
});