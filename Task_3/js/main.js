'use strict';
function unitPage() {
	var listItems = document.getElementsByClassName('list');

	for (var i = 0; i < listItems.length; i++) {
		var item = listItems[i].children,
			itemFirst = item[0],
			itemLast = item[item.length - 1];

		addClass(itemFirst, 'first' );
		addClass(itemLast, 'last' );
	}
}

function addClass(elem, cname) {
	if (elem.className === '') elem.className += cname;
	else elem.className += ' ' + cname;
}

if(window.addEventListener) window.addEventListener('load', unitPage, false);
else if(window.attachEvent) window.attachEvent('onload', unitPage);