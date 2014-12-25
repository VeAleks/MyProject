function unitPage() {
	var childBoxes = document.getElementById('holder').children;

	for (var i = 0; i < childBoxes.length; i++){
		var itemBox = childBoxes[i];

		addClass(itemBox, 'element');
		if (hasClass(itemBox, 'element')) {
			removeClass(itemBox, 'element');
		}
		//hasClass(itemBox, 'element');

		console.log(hasClass(itemBox, 'element'), itemBox)
	};
};

/*function hasClass(elem, cname) {
	var	newArray = elem.className.split(' ');
	console.log(newArray);
	for (var i = newArray.length; i < 1; i--){
		var newArrayItem = newArray[i];
		if(newArrayItem === cname){
			newArray = newArray.replace(newArrayItem, '');
			console.log(newArrayItem)
		}
	}
	newArray.join('');
	console.log(newArray);

}*/

function addClass(elem, cname) {
	elem.className += ' ' + cname;
}
function hasClass(elem, cname) {
	var	newArray = elem.className.split(' ');
	
	for (var i = 0; i < newArray.length; i++){
		if(newArray[i] == cname){
			return true;
		} 
	}
	newArray.join('');
}



function removeClass(elem, cname) {
	if(hasClass(elem, cname) === true){
		elem.className = elem.className.replace( cname, '');
	}
}

if(window.addEventListener) window.addEventListener('load', unitPage, false);
else if(window.attachEvent) window.attachEvent('onload', unitPage);