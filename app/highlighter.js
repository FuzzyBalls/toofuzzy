// function highlight(text) {
// 	return '<span style="background-color: rgb(255,255,0)" class="highlighter">' + text + '</span>'
// }

// var changeHighlightColor = setInterval( function() {
//     var $span = $('.highlighter');
//     if($span.text) {
//         $span.attr('background-color', $div.attr('background-color')=='rgb(255,255,0)' 
//             ? 'rgb(255,0,0)' : 'rgb(255,255,0)');
//     }else {
//         clearInterval(changeHighlightColor);
// }, 2000);

document.getElementsByTagName("body")[0].innerHTML = "";