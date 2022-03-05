let changeColor = document.getElementById("changeColor");

chrome.storage.sync.get("solution", ({ solution }) => {

if(solution) alert('The solution is: '+solution)
});