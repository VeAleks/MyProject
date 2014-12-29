'use strict';
function unitPage() {
	var listItems = document.getElementsByClassName('list');

	for (var i = 0; i < listItems.length; i++) {
		var item = listItems[i].children;

		nthChild(item);
		addSpan(item, listItems[0]);
	}
}

function nthChild (element) {
	for (var i = 1; i < element.length; i = i + 2) {
		addClass(element[i], 'alt');
	}
}

function addClass (element, cname) {
	if (element.className === '') element.className += cname;
	else element.className += ' ' + cname;
}

function addSpan (element, list) {
	for (var i = 0; i < element.length; i++) {
		var spanNum = document.createElement('span');

		spanNum.innerText = i + 1;
		element[i].insertBefore(spanNum,element[i].firstChild);
	}

}

if(window.addEventListener) window.addEventListener('load', unitPage, false);
else if(window.attachEvent) window.attachEvent('onload', unitPage);