'use strict';

$(function(){

	$('#searchBox').on('input', function(e){
		var searchTerm = e.currentTarget.value;
		doSearch(searchTerm, "");
	});

	function doSearch(needle, haystack){
		console.log(needle);
	}
});
