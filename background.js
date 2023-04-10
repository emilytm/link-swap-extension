
//listen for messages
chrome.runtime.onMessage.addListener(function(request, sender, sendResponse) {
    
    //if the action is to toggle linkReplacementState...
    if (request.action === "toggleLinkReplacementState"){

        //get the current value
        chrome.storage.local.get(["linkReplacementState"], function(result) {
            
            //create a new variable to easily reverse it and to check if undefined
            var isRunning = result['linkReplacementState']

            //if it is undefined and therefore hasn't been initialized...
            if (isRunning === undefined){

                //set the initial value of it to false
                chrome.storage.local.set({ linkReplacementState: false });
            
            //but if it is defined...
            } else {

                //set the variable to the opposite of whatever it was, then set the new value in storage
                isRunning = !isRunning
                chrome.storage.local.set({ linkReplacementState: isRunning });
            }

            //test just to log the value and make sure it is toggling as expected
            chrome.storage.local.get(["linkReplacementState"], function(result) {
                console.log(`I'm in toggleLinkReplacementState and the state is now: ${result['linkReplacementState']}`)
            })
          });

    //If the request is to getLinkReplacementState, get and return the current value
    } else if (request.action === "getLinkReplacementState") {
        chrome.storage.local.get("linkReplacementState", function(result) {
            sendResponse({ state: result['linkReplacementState']});
        });
        return true; 

    //if the action is to setLinkReplacementState, set it using value from request
    } /* else if (request.action === "setLinkReplacementState") {
            chrome.storage.local.set({ linkReplacementState: request.state });
    } */
  });