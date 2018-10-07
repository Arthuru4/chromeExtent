document.addEventListener('DOMContentLoaded', function () {
    alert('contentLoaded');
    chrome.runtime.onMessage.addListener(
        function (message, callback) {

            if (message.Message === 'changeColor') {
                chrome.tabs.executeScript({
                    code: 'let img = document.querySelector("video").poster; + console.log(img); + window.open(\'https://drive.google.com/drive/u/0/my-drive\');'
                });
            }
        }
    );
});