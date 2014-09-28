'use strict';

$(document).ready(function(){
	$("#searchBox").on("input", function(){
		chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
			var searchQuery = $("#searchBox").val();
			chrome.tabs.sendMessage(tabs[0].id, {searchQuery: searchQuery}, function(response) {
				console.log(response.farewell);
			});
		});
	});
});