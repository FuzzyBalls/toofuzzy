	var parse = function() {
		return document.getElementsByTagName('p');
	}

	var doSearch = function(needle, haystack){
		var f = new Fuse(haystack, { keys: ['innerText']});
		var results = f.search(needle);
		console.log("number of results: " + results.length);

		return results;
	}

	// highlightOn optional. False = remove highlights from all elements in the results
	var highlight = function(results, highlightOn){
		console.log("attemptin to highlight results");
		var resultsCount = results.length;
		$.each(results, function(index, element){
			var aValue = 1 - (index / resultsCount);

			var $element = $(element);
			if(highlightOn){
				$element.css("background-color", "rgba(255, 0, 0, " + aValue + ")");
			} else {
				$element.css("background-color", "transparent");	
			}
		});
	}

	$(document).ready(function(){
		//set up
		$('body').prepend($('<input id="fuzzysearchbox">'));
		var dom = parse();
		var prevResults; //saves results from last search  to clear higlights later

		// search when input changes
		$('#fuzzysearchbox').on('input', function(e){
			var searchTerm = e.currentTarget.value;

			if(prevResults) { 
				highlight(prevResults, false); //clear highlights
			}
			var results = doSearch(searchTerm, dom); // get new results
			highlight(results, true); //highlight new results

			prevResults = results; // set prevResults to clear later
		});
	});
