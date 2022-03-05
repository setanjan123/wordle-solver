
chrome.runtime.onInstalled.addListener(() => {

const solution = JSON.parse(('nyt-wordle-state')).solution



if(solution) chrome.storage.sync.set({ solution });

});