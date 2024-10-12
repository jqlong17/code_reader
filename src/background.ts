chrome.runtime.onInstalled.addListener(() => {
  console.log('Code Reader extension installed');
});

chrome.action.onClicked.addListener((tab) => {
  if (tab.url?.includes('github.com')) {
    chrome.tabs.sendMessage(tab.id!, { action: 'toggleSidebar' });
  }
});