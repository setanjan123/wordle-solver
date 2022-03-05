chrome.runtime.sendMessage({
    info: localStorage['nyt-wordle-state'] //get from tab's local storage
});