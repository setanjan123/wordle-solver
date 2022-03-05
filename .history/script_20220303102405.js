function click() {
    chrome.storage.sync.get("solution", ({ solution }) => {

    if(solution) alert('The solution is: '+solution)
});
}

changeColor.addEventListener("click", async () => {

    chrome.scripting.executeScript({
  
      target: { tabId: tab.id },
  
      function: click,
  
    });
  
  });
