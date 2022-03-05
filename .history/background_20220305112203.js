chrome.runtime.onMessage.addListener(function (message, sender, sendResponse) {
  localStorage['worldle-solution'] = JSON.parse(message.info).solution; //store into extension's local storage
});