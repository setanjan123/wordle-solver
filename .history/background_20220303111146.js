
chrome.runtime.onInstalled.addListener(() => {



chrome.storage.local.get(['nyt-wordle-state'], function(result) {
    console.log('Value currently is ' + result);
  });



// if(solution) chrome.storage.sync.set({ solution });

});