var fuzzySearch = (function($) {
    var isDemo = false;

    chrome.runtime.onConnect.addListener(function(port) {
        console.assert(port.name == "fuzzypopup");

        port.onMessage.addListener(function(msg) {
        	// console.log(msg.searchQuery);
        	if(msg.toggleDemo){
        		isDemo = !isDemo;
        		console.log(isDemo);
        	} else {
        		startTheFireworks(msg.searchQuery);
        		console.log("starting");
        	}
        });

        port.onDisconnect.addListener(function(){
        	startTheFireworks("");
        });
    });


    var parse = function() {
        var parseResults = [];
        var tagsToGet = ["p", "td", "h1", "h2", "h3", "h4", "h5", "h6", "li", "label", "pre", "code", "blockquote"];

        $.each(tagsToGet, function(index, value) {
            parseResults = parseResults.concat([].slice.call(document.getElementsByTagName(value)));
        });

        return parseResults;
    };

    var doSearch = function(needle, haystack) {
    	var results = [];

    	haystack.forEach(function(element){
    		var score = element.innerText.score(needle, 0.5);

    		if(score >= 0.2){
    			var result = {
    				domElement: element,
    				score: score
    			};
    			console.log(result);
    			results.push(result);
    		}
    	});

        console.log(results);

        // results.sort(function(a, b){
        // 	if(a.score - b.score){
        // 		return -1;
        // 	}

        // 	if(a.score -b.score){
        // 		return 1;
        // 	}

        // 	return 0;
        // });
        
        for(var i = 0; i < results.length; i++){
        	results[i] = results.domElement;
        }
        return results;
    };

    // highlightOn optional. False = remove highlights from all elements in the results
    // var highlight = function(results, highlightOn) {
    //     var resultsCount = results.length;
    //     $.each(results, function(index, element) {
    //         var aValue = (1 - (index / resultsCount)) * .6 + .4; // opacity of the background

    //         var $element = $(element);
    //         if (highlightOn) {
    //             $element.css("background-color", "rgba(255, 255, 0, " + aValue + ")");
    //         } else {
    //             $element.css("background-color", "transparent");
    //         }
    //     });
    // };

    // highlightOn optional. False = remove highlights from all elements in the results
    var highlightForDemo = function(results, highlightOn) {
        var resultsCount = results.length;
        $.each(results, function(index, element) {
            var rValue = isDemo ? Math.floor(Math.random() * 155) + 100 : 255;
            var gValue = isDemo ? Math.floor(Math.random() * 155) + 100 : 0;
            var bValue = isDemo ? Math.floor(Math.random() * 155) + 100 : 0;

            var aValue = (1 - (index / resultsCount)) * .6 + .4; // opacity of the background

            var $element = $(element);
            if (highlightOn) {
                $element.css("background-color", "rgba(" + rValue + ", " + gValue + ", " + bValue + " , " + aValue + ")");
            } else {
                $element.css("background-color", "transparent");
            }
        });
    };

    var dom = parse();
    var prevResults; //saves results from last search  to clear higlights later
    var rainbowTimer;
    var startTheFireworks = function(searchTerm) {

        if (searchTerm) {
            if (prevResults) {
                highlightForDemo(prevResults, false); //clear highlights
            }
            var results = doSearch(searchTerm, dom); // get new results
            // highlightForDemo(results, true); //highlight new results
            prevResults = results; // set prevResults to clear later
            if (!rainbowTimer) {
                rainbowTimer = setInterval(function() {
                    highlightForDemo(prevResults, true);
                }, 100)
            }
        } else {
            if (prevResults) {
                highlightForDemo(prevResults, false); //clear highlights
                prevResults = null;
            }
            clearInterval(rainbowTimer);
            rainbowTimer = null;
        }
    }

    $(document).ready(function() {
        // search when input changes
        $('#fuzzysearchbox, #site-search-query').on('input', function(e) {});
    });

})(jQuery);