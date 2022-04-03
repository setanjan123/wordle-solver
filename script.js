document.getElementById("solve").addEventListener("click", async () => {
    chrome.storage.local.get('wordle-solution', function (result) {
        document.getElementById("solution").innerHTML =  'The Solution is: <b>'+result['wordle-solution']+'<b>'
    });
});

document.getElementById("hintbutton").addEventListener("click", async () => {
    chrome.storage.local.get('wordle-hint', function (result) {
        console.log(result)
        document.getElementById("hint").innerHTML =  '<b>'+result['wordle-hint']+'<b>'
    });
});

