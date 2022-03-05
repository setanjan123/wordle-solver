document.getElementById("solve").addEventListener("click", async () => {
    chrome.storage.local.get('worldle-solution', function (result) {
        alert('The answer is: '+result)
    });
});
