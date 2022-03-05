document.getElementById("solve").addEventListener("click", async () => {

    chrome.storage.sync.get(['nyt-wordle-state'],(result)=>{
        console.log(result)
        // const solution = JSON.parse(result).solution
        // if(solution) console.log('The solution is: '+solution)
    })
  
  });
