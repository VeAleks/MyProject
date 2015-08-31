function initPage() {
	var childBoxes = document.getElementById('holder').children;
	for(var i = 0; i < childBoxes.length; i++) {
		childBoxes[i].className += ' element';
	}
}

if(window.addEventListener) window.addEventListener('load', initPage, false);
else if(window.attachEvent) window.attachEvent('onload', initPage);