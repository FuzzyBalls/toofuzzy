'use strict';

$(function(){

	$('#searchBox').on('input', function(e){
		var searchTerm = e.currentTarget.value;
		doSearch(searchTerm, "");
	});

	// Returns an array of all dom elements on the page containing text 
	function parse() {
	  var $domElements = $("body");
	  var results = []; 
	  // edge case for stuff around <head></head> tag
	  findText($domElements[0], results);
	  return results;
	}

	function findText($domElement, results) {
	  if(domElement) {
	    if($domElement.innerText) {
	      results.push($domElement);
	    } 
	    var $domChildren = $domElement.children;
	    if($domChildren) {
	      for(c : $domChildren) {
	        findText(c, results);
	      }
	    }
	  }
	  return results;
	}
});


