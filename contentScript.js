

//listen for messages
chrome.runtime.onMessage.addListener(function(request, sender, sendResponse) {
    console.log(request)

    //if the action is replaceLinks
    if (request.action == "replaceLinks") {
        console.log(`I'm in contentScript.js and the link being sent to replace is ${request.linkToReplace}`)

        //get current state of linkReplacementEnabled
        chrome.runtime.sendMessage({ action: "getLinkReplacementState" }, function (response) {
            console.log(response)
            //if linkReplacementEnabled is true, get the link inputs from the action request and replace links
            if (response.state) {
                let linkToReplace = request.linkToReplace;
                let replacementLink = request.replacementLink;
                let links = document.getElementsByTagName("a");
                console.log(links)

                for (let i = 0; i < links.length; i++){
                    let link = links[i]
                    if (link.href.includes(linkToReplace)){
                        link.href = link.href.replace(linkToReplace,replacementLink)
                    }
                }
                /* links.forEach(link => {
                    if(link.href.includes(linkToReplace)){
                        console.log(`found a link ${link.href} that contains the subtring`)
                    }
                    link.href = link.href.replace(linkToReplace,replacementLink)
                }) */
                /* chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
                    console.log(tabs[0].url)
                    let linksList = document.querySelectorAll(`a[href*='${linkToReplace}']`)
                    console.log(`linksList is: ${linksList}`)
                    linksList.forEach(link => {
                        link.href = link.href.replace(linkToReplace,replacementLink)
                    });
                }); */
            }
          });
    }
});