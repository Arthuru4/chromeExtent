document.addEventListener('DOMContentLoaded', function () {
    let button = document.querySelector('#Maldives');

    button.addEventListener('click', () => {
        //TODO: SEND SIGNAL FROM HERE (POPUP HTML POPUP JS)
        chrome.runtime.sendMessage({Message: "changeColor"}, function (response) {

        });
        // chrome.tabs.query({active: true, currentWindow: true}, function (tabs) {
        //     chrome.tabs.sendMessage(tabs[0].id, {type: "changeColor"});
        // });
    })
});