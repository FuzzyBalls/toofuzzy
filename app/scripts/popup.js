'use strict';

var port;
$(document).ready(function(){
	$("#searchBox").on("input", function(){
		var searchQuery = $("#searchBox").val();
		sendQuery(searchQuery);
	});

	$("#toggleDemo").click(function(){
		console.log("sending toggle");
		port.postMessage({toggleDemo: "y"});
	});

	chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
		port = chrome.tabs.connect(tabs[0].id, {name: "fuzzypopup"})
	});
});

$(window).unload(function(){
	sendQuery("");
});

var sendQuery = function(searchQuery){
	port.postMessage({searchQuery: searchQuery});
};