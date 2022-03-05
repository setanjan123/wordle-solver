document.getElementById("solve").addEventListener("click", async () => {
    chrome.storage.local.get('wordle-solution', function (result) {
        console.lof(result)
        alert('The answer is: '+result)
    });
});
