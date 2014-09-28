'use strict';

var FuzzySearch = (function($){

	$(document).ready(function(){
		$('#searchBox').on('input', function(e){
			var searchTerm = e.currentTarget.value;
			doSearch(searchTerm, "");
		});
	});

	var parse = function(){
		return $("p");
	}

	// Returns an array of all dom elements on the page containing text 
	// function parse() {
	//   var $domElements = $("body");
	//   var results = []; 
	//   // edge case for stuff around <head></head> tag
	//   findText($domElements[0], results);
	//   return results;
	// }

	// function findText($domElement, results) {
	//   if($domElement) {
	//     if($domElement.innerText) {
	//       results.push($domElement);
	//     } 
	//     var $domChildren = $domElement.children;
	//     if($domChildren) {
	//       for(var c in $domChildren) {
	//         findText(c, results);
	//       }
	//     }
	//   }
	//   return results;
	// }

	return {
		parse: parse,
		findText: findText
	}
})(jQuery);


