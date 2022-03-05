chrome.runtime.onMessage.addListener(function (message, sender, sendResponse) {
  const messageInfo = JSON.parse(message.info).solution
  chrome.storage.local.set('wordle')
  localStorage.setItem({'worldle-solution':messageInfo},()=>{}) //store into extension's local storage
});