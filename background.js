
//following freecodecamp chrome extension tutorial youtube video
/*
chrome.tabs.onUpdated.addListener((tabID, tab) => {
    if(tab.url) {
        chrome.tabs.sendMessage(tabID, {
            type: "NEW",
            pagecheck: true
        })
    }
}
*/