let color = '#3aa757';
let dev = "Sixtus"

chrome.runtime.onInstalled.addListener(() => {
  chrome.storage.sync.set({ color, dev});
  console.log('Default background color set to %cgreen', `color: ${color}`);
});

// chrome.runtime.onMessage.addListener((msg, sender) => {
//   // First, validate the message's structure.
//   if ((msg.from === 'content') && (msg.subject === 'showPageAction')) {
//     // Enable the page-action for the requesting tab.
//     chrome.pageAction.show(sender.tab.id);
//   }
// });