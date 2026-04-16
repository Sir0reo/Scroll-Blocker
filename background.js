chrome.runtime.onInstalled.addListener(() => {
  // Initialize default states in storage
  chrome.storage.sync.get(['enabled', 'youtubeEnabled', 'instagramEnabled', 'tiktokEnabled'], (result) => {
    if (result.enabled === undefined) chrome.storage.sync.set({ enabled: true });
    if (result.youtubeEnabled === undefined) chrome.storage.sync.set({ youtubeEnabled: true });
    if (result.instagramEnabled === undefined) chrome.storage.sync.set({ instagramEnabled: true });
    if (result.tiktokEnabled === undefined) chrome.storage.sync.set({ tiktokEnabled: true });
  });
});
