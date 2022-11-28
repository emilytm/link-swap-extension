const lightning = "lightning.force."
const classic = "my.salesforce."

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
    */
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