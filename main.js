chrome.tabs.query({'active': true, 'currentWindow': true}, function (tabs) {
    var tab = tabs[0];
    document.getElementById("createMiniurlid").href="https://miniurl.id/create.php?page=chromeextcreate&url=" + tab.url;
});