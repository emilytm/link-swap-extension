const lightning = "lightning.force."
const classic = "my.salesforce."

//let btnEl = document.getElementById("go-btn")
//btnEl.addEventListener("click",fixlinks())

document.addEventListener('DOMContentLoaded', fixlinks())

function fixlinks() {
    for (const link of document.links) {
        if(link.href.includes(lightning)) {
            let betterLink = link.href.replace(lightning, classic)
            link.setAttribute('href',betterLink)
        }
    }
}