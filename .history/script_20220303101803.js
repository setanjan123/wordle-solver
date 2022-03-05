let changeColor = document.getElementById("changeColor");

chrome.storage.sync.get("color”, ({ color }) => {

changeColor.style.backgroundColor = color;

});