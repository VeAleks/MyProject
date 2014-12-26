'use strict';
function unitPage() {
	sameHeigthBlocks('block1', 'block2');
	sameHeigthBoxes('list-holder');
	sameHeigthDivs('holder', 'element', 'container', 'my-box');

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
	};
	array.sort(function(a,b){return a < b;});
	maxHeight = array[0] + 'px';
	for (var j = boxes.length - 1; j >= 0; j--){
		boxes[j].style.height = maxHeight;
	};
}

function sameHeigthDivs(parent , element1, element2, element3) {
	var parentDivs = document.getElementsByClassName(parent);

	console.log(parentDivs);

	for (var i = 0; i < parentDivs.length; i++) {
		
		var divs = parentDivs[i].children;
		console.log(divs);
		for (var j = 0; j < divs.length; j--) {

				var height1 = getComputedStyle(divs[j]);
				console.log(height1);

		};
	}
}

if(window.addEventListener) window.addEventListener('load', unitPage, false);
else if(window.attachEvent) window.attachEvent('onload', unitPage);