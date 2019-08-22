// ==UserScript==
// @name         Opencast Downloader
// @namespace    http://deigner.eu
// @version      1.0
// @description  Download Videos from Opencast TU Wien
// @author       Dennis Eigner
// @match        https://oc-presentation.ltcc.tuwien.ac.at/engage/theodul/ui/core.html?id=*
// @grant        none
// ==/UserScript==

(function() {
    'use strict';

    // Your code here...
    setTimeout(createButton, 5000);
})();

function createButton() {
    // stuff you want to happen right away
    console.log('Hello World!')
    const menu = document.getElementById('menu'),
          downloadButton = document.createElement('button');
    downloadButton.innerHTML = 'Download';
    downloadButton.onclick = function() {
        const video = document.querySelector('video');
        const videoUrl = video.getAttribute("src");
        window.open(videoUrl);
    };

    menu.insertBefore(downloadButton, menu.firstChild);
}
