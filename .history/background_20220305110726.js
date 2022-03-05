
chrome.runtime.onInstalled.addListener(() => {



chrome.storage.local.get(['nyt-wordle-state'], function(result) {
    console.log('Value currently is ' + result);
  });

  
// JSON.parse(localStorage.getItem('nyt-wordle-state')).solution



// if(solution) chrome.storage.sync.set({ solution });

});