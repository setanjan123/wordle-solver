function click() {
    chrome.storage.local.get(['nyt-wordle-state'],(result)=>{
        const solution = JSON.parse(result).solution
        if(solution) console.log('The solution is: '+solution)
    })
}

document.getElementById("solve").addEventListener("click", async () => {

    chrome.scripting.executeScript({
  
      target: { tabId: tab.id },
  
      function: click,
  
    });
  
  });
