document.getElementById("solve").addEventListener("click", async () => {
    const tabs = await chrome.tabs.query({ active: true, currentWindow: true });
        const tab = tabs[0]; 

        // Execute script in the current tab
        const fromPageLocalStore = await chrome.tabs.executeScript(tab.id, { code: `localStorage['nyt-wordle-state']` });

        // Store the result  
        await chrome.storage.local.set({[key]:fromPageLocalStore[0]});
    chrome.storage.sync.get("solution", ({ result }) => {

        console.log(result)
        // const solution = JSON.parse(result).solution
        // if(solution) console.log('The solution is: '+solution)
    
      });
  
  });
