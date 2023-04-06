
let linkToReplace = document.getElementById('link-to-replace').value
let replacementLink = document.getElementById('replacement-link').value

let playPauseIcon = document.getElementById('play-pause-icon')
let pauseIcon = 'pause_circle'
let playIcon = 'play_circle'

let isActive = false;

document.addEventListener('submit',function(e){
    e.preventDefault()
    if (linkToReplace.length > 0) {
        if (replacementLink.length > 0) {
            console.log(`user wants to replace ${linkToReplace} with ${replacementLink}`)
        } else {
            console.log(`user wants to replace ${linkToReplace} with nothing`)
        }
    } else {
        console.log(`no user input`)
    }
})

document.getElementById('link-inputs').addEventListener('change',function(e){
    console.log(e)
})

document.addEventListener('DOMContentLoaded', function() {
    const linksList = document.querySelectorAll(`a[href*='${linkToReplace}']`)
    linksList.forEach(link => {
        link.href = link.href.replace(linkToReplace,replacementLink)
    })
})

document.addEventListener('click', function(e) {
    if(e.target.id === 'play-pause-btn') {
        isActive = !isActive
        playPauseIcon.textContent === playIcon ?
            playPauseIcon.textContent = pauseIcon :
            playPauseIcon.textContent = playIcon
/*         playPauseBtn.innerHTML === playIcon ? 
            playPauseBtn.innerHTML = pauseIcon :
            playPauseBtn.innerHTML = playIcon */
    }
})

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