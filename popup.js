
let linkToReplace = document.getElementById('link-to-replace').value
let replacementLink = document.getElementById('replacement-link').value

let playPauseIcon = document.getElementById('play-pause-icon')
let pauseIcon = 'pause_circle'
let playIcon = 'play_circle'

let isActive = false;

const inputs = document.getElementById('link-inputs') 

document.addEventListener('submit',function(e){
    e.preventDefault()

    chrome.runtime.sendMessage({ action: "toggleLinkReplacementState" }, function (response) {
        console.log('toggled linkReplacementState')
    })

    switchLinks()

})

inputs.addEventListener('input',function(e){
    linkToReplace = document.getElementById('link-to-replace').value
    replacementLink = document.getElementById('replacement-link').value
    switchLinks()
})

document.addEventListener('DOMContentLoaded', swapLinks)


function swapLinks(){
    if(isActive){
        console.log(`Searching for all links on this page that contain the substring ${linkToReplace}`)
        let linksList = document.querySelectorAll(`a[href*='${linkToReplace}']`)
        console.log(linksList)
        linksList.forEach(link => {
            link.href = link.href.replace(linkToReplace,replacementLink)
        })
    }
}

document.addEventListener('click', function(e) {
    console.log(`LinkSwap is ${isActive ? 'running' : 'not running'}`)
    console.log(`The ID of the item clicked is ${e.target.id}`)
    if(e.target.id === 'play-pause-btn') {
        isActive = !isActive
        switchLinks()
        console.log(isActive)
        isActive ? 
            playPauseIcon.textContent = pauseIcon :
            playPauseIcon.textContent = playIcon
    }
})

function switchLinks() {
    setTimeout(
        function() {
            chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
                chrome.tabs.sendMessage(tabs[0].id, {action: "replaceLinks", linkToReplace: linkToReplace, replacementLink: replacementLink});
            });
        }, 1000)
};


/*

Nothing to start
Input a link segment to replace
Input the segment to replace it with
Submit
Indicate that it is swapping those links
Give the option to pause
When form is updated, give option to confirm changes
When paused, give option to start back up

*/

/*

//let btnEl = document.getElementById("go-btn")
//btnEl.addEventListener("click",fixlinks())

//document.addEventListener('DOMContentLoaded', fixlinks())
fixlinks()
function fixlinks() {
    /*for (const link of document.links) {
        if(link.href.includes(lightning)) {
            let betterLink = link.href.replace(lightning, classic)
            link.setAttribute('href',betterLink)
        }
    }
    
   const linksList = document.querySelectorAll("a[href*='lightning.force.']")
   for (let badLink of linksList) {
        var replaceLink = badLink.href.replace('lightning.force.', 'my.salesforce.')
        badLink.href = replaceLink
   }
}
//Got the code from here down from https://stackoverflow.com/questions/4842590/how-to-run-a-function-when-the-page-is-loaded

if (window.attachEvent) {window.attachEvent('onload', fixlinks());}
else if (window.addEventListener) {window.addEventListener('load', fixlinks(), false);}
else {document.addEventListener('load', fixlinks(), false);}


/*
(() => {

    chrome.runtime.onMessage.addListener((obv, sender, response) => {
        const {type, pagecheck} = obj;

        if(type === "NEW") {
            fixLinks2();
        }
    });

    const fixLinks2 = () => {
        for (const link of document.links) {
            if(link.href.includes(lightning)) {
                let betterLink = link.href.replace(lightning, classic)
                link.setAttribute('href',betterLink)
            }
        }
    }

})();
*/