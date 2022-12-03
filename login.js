setTimeout( function() { load() }, 1)

function load() {
    const resourceUrl = browser.runtime.getURL("login.html");
    fetch(resourceUrl)
    .then(response => {
        return response.text();
    }).then(rawFileContent => {
        document.body.outerHTML = rawFileContent
});
console.log("OKK")
}
