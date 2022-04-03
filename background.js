chrome.runtime.onMessage.addListener(function (message, sender, sendResponse) {
  const messageInfo = JSON.parse(message.info).solution
  chrome.storage.local.set({'wordle-solution':messageInfo},()=>{})
  fetch('https://api.dictionaryapi.dev/api/v2/entries/en/'+messageInfo)
  .then(res=>res.json())
  .then(res=>{
       if(res.title=='No Definitions Found')  chrome.storage.local.set({'wordle-hint':'No Hints available'},()=>{})
       else {
           const meanings = res[0].meanings
           const meaning = meanings[Math.floor(Math.random()*meanings.length)]
           const definition = meaning.definitions[Math.floor(Math.random()*meaning.definitions.length)].definition
           chrome.storage.local.set({'wordle-hint':definition},()=>{})
       }
  })
});