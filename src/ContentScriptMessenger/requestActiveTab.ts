export async function requestActiveTab<M>(message: M) {
  if (!chrome.tabs) {
    throw new Error("No chrome.tabs found");
  }

  const tab = await getActiveTab();

  return await sendTabMessage(tab.id as number, message);
}

async function getActiveTab() {
  const tabs = await getActiveTabs();

  const tab = tabs[0];

  if (!tab?.id) {
    throw new Error("No active tab found");
  }

  return tab;
}

async function getActiveTabs() {
  return await chrome.tabs.query({ active: true, currentWindow: true });
}

async function sendTabMessage(tabId: number, message: any) {
  return await chrome.tabs.sendMessage(tabId, message);
}
