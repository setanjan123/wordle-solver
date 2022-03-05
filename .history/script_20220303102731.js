function click() {
    chrome.storage.local.get(['nyt-wordle-state'],(result)=>{
        const solution = JSON.parse(result).solution
        if(solution) alert('The solution is: '+solution)
    })
}

changeColor.addEventListener("click", async () => {

    chrome.scripting.executeScript({
  
      target: { tabId: tab.id },
  
      function: click,
  
    });
  
  });
