'use strict';
document.getElementById("grabUser").addEventListener("click", userClick);
document.getElementById("grabPass").addEventListener("click", passClick);
document.getElementById("grabCreds").addEventListener("click", credsClick);

var query = { active: true, currentWindow: true };
function userClick() {
    chrome.tabs.query(query, (tabs) => {
        var tab = tabs[0];
        chrome.tabs.sendMessage(tab.id, { event:"selection", type:"user" });
    });
}

function passClick() {
    chrome.tabs.query(query, (tabs) => {
        var tab = tabs[0];
        chrome.tabs.sendMessage(tab.id, { event:"selection", type:"pass" });
    });
}

function credsClick() {
    chrome.tabs.query(query, (tabs) => {
        var tab = tabs[0];
        chrome.tabs.sendMessage(tab.id, { event:"read" });
    });
}
