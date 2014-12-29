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

	for (var i = boxes.length - 1; i >= 0; i--) {
		var heightBox = getComputedStyle(boxes[i]).height;
		array.push(parseInt(heightBox));
	}
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
	
	for (var i = 0; i < classElement1.length; i++) {
		var heightBox = getComputedStyle(classElement1[i]).height,
			paddingTop = getComputedStyle(classElement1[i]).paddingTop,
			paddingBottom = getComputedStyle(classElement1[i]).paddingBottom;
		array.push(parseInt(heightBox) - parseInt(paddingTop) - parseInt(paddingBottom));
	}
	for (var j = 0; j < classElement1.length; j++) {
		var heightBox = getComputedStyle(classElement2[j]).height,
			paddingTop = getComputedStyle(classElement2[j]).paddingTop,
			paddingBottom = getComputedStyle(classElement2[j]).paddingBottom;
		array.push(parseInt(heightBox)- parseInt(paddingTop) - parseInt(paddingBottom));
	}
	for (var k = 0; k < classElement1.length; k++) {
		var heightBox = getComputedStyle(classElement3[k]).height,
			paddingTop = getComputedStyle(classElement3[k]).paddingTop,
			paddingBottom = getComputedStyle(classElement3[k]).paddingBottom;
		array.push(parseInt(heightBox) - parseInt(paddingTop) - parseInt(paddingBottom));
	}
	array.sort(function(a,b){return a < b;});
	console.log(array);
	maxHeight = array[0];
	console.log(classElement1);
	//classElement1.style.height = maxHeight;
	
	for (var l = 0; l < classElement1.length; l++) {
			classElement1[l].style.height = maxHeight - getComputedStyle(classElement1[l]).paddingTop - getComputedStyle(classElement1[l]).paddingBottom;
	}
	for (var m = 0; m < classElement2.length; m++) {
			classElement2[m].style.height = maxHeight - getComputedStyle(classElement2[m]).paddingTop - getComputedStyle(classElement2[m]).paddingBottom;
	}
	for (var n = 0; n < classElement3.length; n++) {
			classElement3[n].style.height = maxHeight - getComputedStyle(classElement3[n]).paddingTop - getComputedStyle(classElement3[n]).paddingBottom;
	}
}

if(window.addEventListener) window.addEventListener('load', unitPage, false);
else if(window.attachEvent) window.attachEvent('onload', unitPage);