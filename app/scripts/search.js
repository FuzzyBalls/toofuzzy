'use strict';

$(function(){
    //debug
    var test = "This paragraph is a test. Kendall is sitting next to me. He a cool guy. Philip is kinda across me. He also a cool guy. Ngoc is trying to talk to me. He's got a buzzy cut kinda thing going on. He cool. And straight across is Alyssa. She's a church nun. She got dat tho.";
    var haystack = parseHTML();
    var fuzzy = new Fuse(test);
	$('#searchBox').on('input', function(e){
		var searchTerm = e.currentTarget.value;
		doSearch(searchTerm, fuzzy);
	});

function doSearch(needle, fsearch) {
    var pieces = fsearch.split(".");
    var atoms = pieces.split("");
    var shards = needle.split("");

two separate fuse searches
only return if there all searches return something
return matches that are closest to each other.

}

/*	function doSearch(needle, fsearch){
		//debug
        console.log(needle);
	    var block = fsearch.search(needle);
        var shards = needle.split("");
        var pieces = block.split("");
        var bitarr = Array(shards.length);
        for (var i = 0; i < pieces.length; i++) {
            for (var k = 0; k < shards.length; k++) {
               if (pieces[i] != " ") {
                    bitarr[k] = (shards[k] === pieces[i]);
                    if (bitarr[k] == ) {
                        
                    }
               }
               if (bitarr) {
                    return string;
               }
            }
        }
    }*/

/*    function search(str, pattern) {
        var words = str.split(' ')
        for(var i = 0; i < words.length; i++) {
            var word = words[i]
            for(var j = 0; j < word.length; j++) {
                for(var k = 0; k < pattern.length; k++) {
                    var bitmask = []
                    for(var tmp = 0; tmp < pattern.length; tmp++) {

                    }
                    if() {

                    }
                }
            }
        }*/
    }
});

/** other stuff **/
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


