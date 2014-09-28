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

