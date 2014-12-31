'use strict';
function unitPage() {
	var arrayHolders = document.getElementsByClassName('holder');

	for (var i = 0; i< arrayHolders.length; i++) {
		var holder = arrayHolders[i];

		if(holder.className === 'holder active' ){
			for (var j = 0; j< holder.children.length; j++) {
				var child = holder.children[j];

				if(child.className === 'box') child.style.display = 'block'; 
			}
		}
		for (var j = 0; j < holder.children.length; j++) {
			var child = holder.children[j],
			btnClick = function (element, active, box){
				if(child.addEventListener) child.addEventListener('click', addClass(element, active, box), false);
				else if(child.attachEvent) child.attachEvent('onclick', addClass(element, active, box));
			};

			if(child.className === 'button') btnClick(holder, 'active', 'box');
		}
	}
}

function addClass(elem, cname, box) {
	var hasClass = function (elem, cname, box ) {
			var newArray = elem.className.split(' ');

			for (var i = 0; i < newArray.length; i++){
			if(newArray[i] === cname) return true;
			}
			newArray.join('');
	},
		boxVisible = function (elem, box){
		for (var i = 0; i < elem.children.length; i++) {
			var child = elem.children[i];

			if(hasClass(elem, cname) === true){
				if(child.className === box) child.style.display = 'block';
			} else{
				if(child.className === box){
					child.style.display = 'none'; 
				}
			}
		}
	};

	return function(){
		hasClass(elem, cname, box);
		if(hasClass(elem, cname) === true) elem.className = elem.className.replace(' ' + cname, '');
		else elem.className += ' ' + cname;
		boxVisible(elem, box);
	}
}

if(window.addEventListener) window.addEventListener('load', unitPage, false);
else if(window.attachEvent) window.attachEvent('onload', unitPage);