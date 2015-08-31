function initPage() {
	var listsArray = document.querySelectorAll('.list');
	for(var i = 0; i < listsArray.length; i++) {
		var lists = listsArray[i].children;

		for(var j = 0; j < lists.length; j++) {
			var items  = lists[j];
			
			items.innerHTML = '<span>' + (j + 1) + '</span>' + ' ' + items.innerText;
			if(j % 2) {
				items.className += ' alt';
			}
		}
	}
}

if(window.addEventListener) window.addEventListener('load', initPage, false);
else if(window.attachEvent) window.attachEvent('onload', initPage);