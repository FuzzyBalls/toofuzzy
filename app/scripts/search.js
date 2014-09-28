	$('body').prepend($('<input id="fuzzysearchbox">'));
	var parse = function(){
		return document.getElementsByTagName('p');
	}

	var doSearch = function(needle, haystack){
		var f = new Fuse(parse(), { keys: ['innerText']});
		var results = f.search(needle);
		console.log(results[0].innerText);
	}

	$(document).ready(function(){

		var pTags = parse();
		console.log(pTags);

		$('#fuzzysearchbox').on('input', function(e){
			var searchTerm = e.currentTarget.value;
			doSearch(searchTerm, pTags);
		});
	});
// 'use strict';

// var FuzzySearch = (function($){

// 	var parse = function(){
// 		return document.getElementsByTagName('p');
// 	}

// 	var doSearch = function(needle, haystack){
// 		var f = new Fuse(parse(), { keys: []});
// 	}

// 	$(document).ready(function(){

// 		var pTags = parse();
// 		console.log(pTags);

// 		$('#searchBox').on('input', function(e){
// 			var searchTerm = e.currentTarget.value;
// 			doSearch(searchTerm, "");
// 		});
// 	});


// 	// Returns an array of all dom elements on the page containing text 
// 	// function parse() {
// 	//   var $domElements = $("body");
// 	//   var results = []; 
// 	//   // edge case for stuff around <head></head> tag
// 	//   findText($domElements[0], results);
// 	//   return results;
// 	// }

// 	// function findText($domElement, results) {
// 	//   if($domElement) {
// 	//     if($domElement.innerText) {
// 	//       results.push($domElement);
// 	//     } 
// 	//     var $domChildren = $domElement.children;
// 	//     if($domChildren) {
// 	//       for(var c in $domChildren) {
// 	//         findText(c, results);
// 	//       }
// 	//     }
// 	//   }
// 	//   return results;
// 	// }

// 	return {
// 		parse: parse
// 		// findText: findText
// 	}
// })(jQuery);


