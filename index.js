const lightning = "lightning.force."
const classic = "my.salesforce."

function findlinks() {
    for (const link of document.links) {
        if(link.href.includes(lightning)) {
            let betterLink = link.href.replace(lightning, classic)
            link.setAttribute('href',betterLink)
        }
    }
}