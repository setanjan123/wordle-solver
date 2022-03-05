chrome.runtime.onMessage.addListener(function (message, sender, sendResponse) {
  const messageInfo = JSON.parse(message.info).solution
  console.log(messageInfo)
  localStorage['worldle-solution'] = JSON.parse(message.info).solution; //store into extension's local storage
});