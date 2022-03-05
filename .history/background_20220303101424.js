
chrome.runtime.onInstalled.addListener(() => {

const solution = JSON.parse(localStorage.getItem('nyt-wordle-state')).solution

if(solution) alert('The solution is: '+solution)

});