'use strict';

var elements = {};

var userListener = function(e) {
    console.log("document body clicked");
    e = e || window.event;
    if(e.target.tagName == "INPUT") {
        elements.user = e.target;
        document.removeEventListener('click', userListener, false);
    } else {
        alert("Please select an input element... That is a " + e.target.tagName + " element.");
    }
}
var passListener = function(e) {
    console.log("document body clicked");
    e = e || window.event;
    if(e.target.tagName == "INPUT") {
        elements.pass = e.target;
        document.removeEventListener('click', passListener, false);
    } else {
       alert("Please select an input element... That is a " + e.target.tagName + " element.");
    }
}
chrome.runtime.onMessage.addListener(function(request, sender, callback) {
    console.log("message recieved");
    if(request.event == "selection") {
        aquireElements(request.type);
    } else if (request.event == "read") {
        getCredentials(elements);
    } else {
        recover();
    }
});

//writeCredentials(null, null, null);


function aquireElements(elementType) {
    if(elementType == "user") {
        document.addEventListener('click', userListener, false);
    } else if (elementType == "pass") {
        document.addEventListener('click', passListener, false);
    } else {
        recover();
    }
}

function getCredentials(elements) {
    var creds = {};
    creds.user = elements.user.value;
    creds.pass = elements.pass.value;
    console.log(creds);
    //write credentials
}

function recover() {
    console.log("something went very, very wrong");
}
