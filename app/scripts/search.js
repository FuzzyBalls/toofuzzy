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

	function doSearch(needle, fsearch){
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
    }

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
