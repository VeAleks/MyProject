function message(elem1, elem2) {
	return function() {
		alert('current number: ' +  elem1 + ', numbers: ' + elem2);
		event.stopPropagation();
	};
}

function searchItems(element) {
	for(var i = 0; i < element.length; i++) {
		var itemsArray = element[i].children,
			number = itemsArray.length;

		for(var j = 0; j < itemsArray.length; j++) {
			var item = itemsArray[j],
				currentNum = j + 1;

			if(item.addEventListener) {
				item.addEventListener('click', message(currentNum, number), false);
			}
			else if(item.attachEvent) {
				item.attachEvent('onclick',message(currentNum, number));
			}
			searchItems(item.children);
		}
	}
}

function unitPage() {
	var listsArray = document.querySelectorAll('.list');

	searchItems(listsArray);
}
if(window.addEventListener) window.addEventListener('load', unitPage, false);
else if(window.attachEvent) window.attachEvent('onload', unitPage);