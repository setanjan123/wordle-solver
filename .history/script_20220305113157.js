document.getElementById("solve").addEventListener("click", async () => {
    chrome.storage.local.get('wordle-solution', function (result) {
        console.log(result)
        alert('The answer is: '+result)
    });
});
