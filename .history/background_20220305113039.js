chrome.runtime.onMessage.addListener(function (message, sender, sendResponse) {
  const messageInfo = JSON.parse(message.info).solution
  console.log('Solution--'+solution)
  chrome.storage.local.set({'wordle-solution':messageInfo},()=>{})
});