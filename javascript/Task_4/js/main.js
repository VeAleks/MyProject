function findIndents (element){
		var paddingTop = parseInt(getComputedStyle(element).paddingTop),
			paddingBottom = parseInt(getComputedStyle(element).paddingBottom),
			borderTop = parseInt(getComputedStyle(element).borderTop),
			borderBottom = parseInt(getComputedStyle(element).borderBottom),
			resultIndents = paddingTop + paddingBottom + borderTop + borderBottom;

		return resultIndents;
}

function findMaxHeight (array) {
	var arrayHeights = [];

	for (var i = 0; i < array.length; i++) {
		var element = array[i];

		arrayHeights.push(parseInt((element).offsetHeight));
		arrayHeights.sort(function(a,b){return a < b;});
	}
	return arrayHeights[0];
}

function alignBlocks() {
	var arrayElements = document.querySelectorAll(Array.prototype.slice.call(arguments)),
		maxHeight = findMaxHeight(arrayElements);

	for (var j = 0; j < arrayElements.length; j++) {
		var element = arrayElements[j];

		element.style.height = maxHeight - findIndents(element) +'px';
	}
}

function initPage() {
	alignBlocks('#block1', '#block2');
	alignBlocks('#list-holder > div.box');
	alignBlocks('.element', '.container', '.my-box');
}

if(window.addEventListener) window.addEventListener('load', initPage, false);
else if(window.attachEvent) window.attachEvent('onload', initPage);