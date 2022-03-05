function click() {
    chrome.storage.sync.get("solution", ({ solution }) => {

    if(solution) alert('The solution is: '+solution)
});
}
