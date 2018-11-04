document.addEventListener('DOMContentLoaded', function () {
    chrome.runtime.onMessage.addListener(
        function (message, callback) {

            if (message.Message === 'changeColor') {
                chrome.tabs.executeScript({
                    code: 'let img = document.querySelector("video").poster; + console.log(img); + window.open(img);'
                });
            }
        }
    );
});
