document.getElementById("solve").addEventListener("click", async () => {
    chrome.storage.local.get('wordle-solution', function (result) {
        document.getElementById("solution").innerHTML =  '<b>'+result['wordle-solution']+'<b>'
    });
});
