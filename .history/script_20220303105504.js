document.getElementById("solve").addEventListener("click", async () => {

    chrome.storage.local.get(['nyt-wordle-state'],(result)=>{
        console.log(result.toString())
        const solution = JSON.parse(result).solution
        if(solution) console.log('The solution is: '+solution)
    })
  
  });
