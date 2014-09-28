	var parse = function() {
		return document.getElementsByTagName('p');
	}

	var doSearch = function(needle, haystack){
		var f = new Fuse(haystack, { keys: ['innerText']});
		var results = f.search(needle);
		console.log(results);
	}

	$(document).ready(function(){
		$('body').prepend($('<input id="fuzzysearchbox">'));
		var dom = parse();

		$('#fuzzysearchbox').on('input', function(e){
			var searchTerm = e.currentTarget.value;
			doSearch(searchTerm, dom);
		});
	});

