'use strict';
function unitPage() {
	var listItems = document.getElementsByClassName('list');
	searchItems(listItems);
}

function searchItems (element){
	for (var i = 0; i < element.length; i++) {
		var items = element[i].children,
			number = items.length;

		for (var j = 0; j < items.length; j++) {
			var currentNum = j + 1,
				item = items[j].children,
				messageFun = function(cur, num){
					return function(){
						alert('current nuber: ' +  cur + ', number items: ' + num);
						event.stopPropagation();
					};
				};
			
			if(items[j].addEventListener) items[j].addEventListener('click', messageFun(currentNum, number), false);
			else if(items[j].attachEvent) items[j].attachEvent('onclick', messageFun(currentNum, number));
			searchItems (item);
		}
	}
}

function itemClick (item, cnum, num){
	if(item.addEventListener) item.addEventListener('click', message(cnum, num), false);
	else if(item.attachEvent) item.attachEvent('onclick', message(cnum, num));
}

if(window.addEventListener) window.addEventListener('load', unitPage, false);
else if(window.attachEvent) window.attachEvent('onload', unitPage);