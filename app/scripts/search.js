chrome.runtime.onMessage.addListener(function(request, sender, sendResponse) {
    console.log(sender.tab ?
                "from a content script:" + sender.tab.url :
                "from the extension");
    if (request.searchQuery) {
    	console.log("got search query: " + request.searchQuery);
    	startTheFireworks(request.searchQuery);
    	sendResponse({farewell: "goodbye"});
  	}
});

	var parse = function() {
		var parseResults = [];
		var tagsToGet = ["p", "td", "h1", "h2", "h3", "h4", "h5", "h6", "li", "label", "pre", "code", "blockquote"];

		$.each(tagsToGet, function(index, value){
			parseResults = parseResults.concat([].slice.call(document.getElementsByTagName(value)));
		});

		return parseResults;
	};

	var doSearch = function(needle, haystack){
		var f = new Fuse(haystack, { keys: ['innerText']});
		var results = f.search(needle);

		return results;
	};

	// highlightOn optional. False = remove highlights from all elements in the results
	var highlight = function(results, highlightOn){
		var resultsCount = results.length;
		$.each(results, function(index, element){
			var aValue = (1 - (index / resultsCount)) * .6 + .4; // opacity of the background

			var $element = $(element);
			if(highlightOn){
				$element.css("background-color", "rgba(255, 255, 0, " + aValue + ")");
			} else {
				$element.css("background-color", "transparent");	
			}
		});
	};

	// highlightOn optional. False = remove highlights from all elements in the results
	var highlightForDemo = function(results, highlightOn){
		var resultsCount = results.length;
		$.each(results, function(index, element){
			var rValue = Math.floor(Math.random() * 255);
			var gValue = Math.floor(Math.random() * 255);
			var bValue = Math.floor(Math.random() * 255);

			var aValue = (1 - (index / resultsCount)) * .6 + .4; // opacity of the background

			var $element = $(element);
			if(highlightOn){
				$element.css("background-color", "rgba(" + rValue + ", " + gValue + ", " + bValue + " , " + aValue + ")");
			} else {
				$element.css("background-color", "transparent");	
			}
		});
	};

	var startTheFireworks = function(searchTerm){
		var dom = parse();
		var prevResults; //saves results from last search  to clear higlights later
		var rainbowTimer;

		if(searchTerm){
			if(prevResults) { 
				highlightForDemo(prevResults, false); //clear highlights
			}
			var results = doSearch(searchTerm, dom); // get new results
			// highlightForDemo(results, true); //highlight new results
			prevResults = results; // set prevResults to clear later
			if(!rainbowTimer){
				rainbowTimer = setInterval(function(){
					highlightForDemo(prevResults, true);	
				}, 100)
			}
		} else {
			if(prevResults) { 
				highlightForDemo(prevResults, false); //clear highlights
				prevResults = null;
			}
			clearInterval(rainbowTimer);
			rainbowTimer = null;
		}
	}

	$(document).ready(function(){
		//set up
		$('body').prepend($('<input id="fuzzysearchbox">'));


		// search when input changes
		$('#fuzzysearchbox, #site-search-query').on('input', function(e){
		});
	});
