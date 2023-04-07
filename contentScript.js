
chrome.runtime.onMessage.addListener(function(request, sender, sendResponse) {
    if (request.action == "replaceLinks") {
      let linkToReplace = request.linkToReplace;
      let replacementLink = request.replacementLink

      chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
        chrome.tabs.executeScript(tabs[0].id, {file: "content.js"}, function() {
          // Send a message to the content script to replace the links
          chrome.tabs.sendMessage(tabs[0].id, {action: "replaceLinks", linkToReplace: linkToReplace, newLink: newLink});
        });
      });


        let linksList = document.querySelectorAll(`a[href*='${linkToReplace}']`)
        linksList.forEach(link => {
            link.href = link.href.replace(linkToReplace,replacementLink)
        })
    }
  });
  