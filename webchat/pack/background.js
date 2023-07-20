// Load Socket.IO script into popup.html
chrome.browserAction.onClicked.addListener((tab) => {
  chrome.scripting.executeScript({
    target: { tabId: tab.id },
    files: ['js/socket.io.js', 'popup.js'],
  });
});
