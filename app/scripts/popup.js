'use strict';

$(document).ready(function(){
	$("#searchBox").on("input", function(){
		var searchQuery = $("#searchBox").val();
		sendQuery(searchQuery);
	});
});

$(window).unload(function(){
	sendQuery("");
});

var sendQuery = function(searchQuery){
	chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
		chrome.tabs.sendMessage(tabs[0].id, {searchQuery: searchQuery}, function(response) {
			console.log(response.farewell);
		});
	});
};