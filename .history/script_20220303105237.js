document.getElementById("solve").addEventListener("click", async () => {

    chrome.storage.local.get(['nyt-wordle-state'],(result)=>{
        const solution = JSON.parse(result).solution
        if(solution) console.log('The solution is: '+solution)
    })
  
  });
