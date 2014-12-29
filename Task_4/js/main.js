'use strict';
function unitPage() {
	sameHeigthBlocks('block1', 'block2');
	sameHeigthBoxes('list-holder');
	sameHeigthDivs('element', 'container', 'my-box');

}

function sameHeigthBlocks(element1, element2){
	var BlockOne = document.getElementById(element1),
		BlockTwo = document.getElementById(element2),
		heightBlockOne = getComputedStyle(BlockOne).height,
		heightBlockTwo = getComputedStyle(BlockTwo).height;

	if (heightBlockOne > heightBlockTwo) BlockTwo.style.height = heightBlockOne;
	else BlockOne.style.height = heightBlockTwo;
}

function sameHeigthBoxes(element){
	var boxes = document.getElementById(element).children,
	maxHeight,
	array = [];

	findHeight (boxes, array);
	array.sort(function(a,b){return a < b;});
	maxHeight = array[0] + 'px';
	for (var j = boxes.length - 1; j >= 0; j--){
		boxes[j].style.height = maxHeight;
	}
}

function sameHeigthDivs(element1, element2, element3) {
	var classElement1 = document.getElementsByClassName(element1),
		classElement2 = document.getElementsByClassName(element2),
		classElement3 = document.getElementsByClassName(element3),
		maxHeight,
		array = [];
	
	findHeight(classElement1, array);
	findHeight(classElement2, array);
	findHeight(classElement3, array);
	array.sort(function(a,b){return a < b;});
	maxHeight = array[0];
	addHeight(classElement1, maxHeight);
	addHeight(classElement2, maxHeight);
	addHeight(classElement3, maxHeight);
}


function findHeight (element, array) {
	for (var i = 0; i < element.length; i++) {
		var heightBox = element[i].offsetHeight;

		array.push(parseInt(heightBox));
	}
}
function addHeight (element, maxHeight){
	for (var i = 0; i < element.length; i++) {
		var paddingTop = parseInt(getComputedStyle(element[i]).paddingTop),
			paddingBottom = parseInt(getComputedStyle(element[i]).paddingBottom),
			borderTop = parseInt(getComputedStyle(element[i]).borderTop),
			borderBottom = parseInt(getComputedStyle(element[i]).borderBottom),
			resultHeight;

		resultHeight = maxHeight - paddingTop - paddingBottom - borderTop - borderBottom;
		element[i].style.height = resultHeight + 'px';
	
	}
}

if(window.addEventListener) window.addEventListener('load', unitPage, false);
else if(window.attachEvent) window.attachEvent('onload', unitPage);