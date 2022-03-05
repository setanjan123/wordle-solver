
chrome.runtime.onInstalled.addListener(() => {

const solution = JSON.parse(('nyt-wordle-state')).solution
console.log('---------')
console.log(solution)

if(solution) chrome.storage.sync.set({ solution });

});