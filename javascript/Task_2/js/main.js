'use strict';
function initPage() {
	var listItems = document.getElementById('list-holder').children;

	for(var i = 0; i < listItems.length; i++) {
		var container = listItems[i],
			image = container.getElementsByTagName('img')[0];

		image.style.marginTop = (container.offsetHeight - image.offsetHeight) / 2 + 'px';
		image.style.marginLeft = (container.offsetWidth - image.offsetWidth) / 2 + 'px';
	}
}

if(window.addEventListener) window.addEventListener('load', initPage, false);
else if(window.attachEvent) window.attachEvent('onload', initPage);