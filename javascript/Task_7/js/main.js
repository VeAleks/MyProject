function hasClass(elem, cname) {
	var newArray = elem.className.split(' ');

	for(var i = 0; i < newArray.length; i++) {
		if(newArray[i] === cname){
			return true;
		}
	}
}

function addClass(elem, cname) {
	var newArray = elem.className.split(' ');

	if(!hasClass(elem, cname)) {
		newArray.push(cname);
	}
	elem.className =  newArray.join(' ');
}

function removeClass(elem, cname) {
	var newArray = elem.className.split(' ');

	for(var i = newArray.length - 1; i >= 0; i--) {
		if (newArray[i] === cname){
			newArray.splice(i, 1);
		}
	}
	elem.className =  newArray.join(' ');
}

function initCollapsible (containerNode, openerNode, dropNode) {
	var visibleCollapside = function() {
		if(hasClass(containerNode, 'active')) {
			dropNode.style.display = 'none';
			removeClass(containerNode, 'active');
		} else {
			addClass(containerNode, 'active');
			dropNode.style.display = 'block';
		}
	};

	if(openerNode.addEventListener) openerNode.addEventListener('click', visibleCollapside, false);
	else if(openerNode.attachEvent) openerNode.attachEvent('onclick', visibleCollapside);
}

function initPage() {
	var arrayHolders = document.querySelectorAll('.holder'),
		arrayDrops = document.querySelectorAll('.box'),
		arrayOpeners = document.querySelectorAll('a.button');

	for(var i = 0; i < arrayHolders.length; i++) {
		var holdersList = arrayHolders[i],
			drops = arrayDrops[i];


		if(hasClass(holdersList, 'active')) {
			for (var j = 0; j < drops.length; j++) {
				drops.style.display = 'block';
			}
		}
		initCollapsible(holdersList, arrayOpeners[i], drops);
	}
}

if(window.addEventListener) window.addEventListener('load', initPage, false);
else if(window.attachEvent) window.attachEvent('onload', initPage);