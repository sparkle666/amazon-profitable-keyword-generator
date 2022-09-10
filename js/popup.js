// let changeColor = document.getElementById("changeColor");

// chrome.storage.sync.get("color", ({ color }) => {
//   changeColor.style.backgroundColor = color;
// });

let changeColor = document.getElementById("changeColor")

changeColor.addEventListener("click", async ()=> {
    let [tab] = await chrome.tabs.query({ active: true, currentWindow: true });
    console.log(tab)
    chrome.scripting.executeScript({
        target: { tabId: tab.id },
        func: setPageBackgroundColor,
      });
})

function setPageBackgroundColor() {
    chrome.storage.sync.get("color", ({ color }) => {
      document.body.style.backgroundColor = color;
    });
  }

