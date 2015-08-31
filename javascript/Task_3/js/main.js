function initPage() {
	var lists = document.querySelectorAll('ul');

	for (var i = 0; i < lists.length; i++) {
		var listsItem = lists[i].children;
		listsItem[0].className += ' first';
		listsItem[listsItem.length - 1].className += ' last';
	}
}

if(window.addEventListener) window.addEventListener('load', initPage, false); else if(window.attachEvent) window.attachEvent('onload', initPage);