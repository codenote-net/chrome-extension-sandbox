chrome.devtools.network.onRequestFinished.addListener(
    function (request) {
        const reqStr = JSON.stringify(request.request);
        const resStr = JSON.stringify(request.response);

        chrome.devtools.inspectedWindow.eval(`console.log('request: ${reqStr}');`);
        chrome.devtools.inspectedWindow.eval(`console.log('response: ${resStr}');`);
    }
);
