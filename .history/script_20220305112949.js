document.getElementById("solve").addEventListener("click", async () => {
    chrome.storage.local.get('wordle-solution', function (result) {
        alert('The answer is: '+result)
    });
});
