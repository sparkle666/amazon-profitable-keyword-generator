let color = '#3aa757';
let dev = "Sixtus"

chrome.runtime.onInstalled.addListener(() => {
  chrome.storage.sync.set({ color, dev});
  console.log('Default background color set to %cgreen', `color: ${color}`);
});