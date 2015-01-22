'use strict';
function unitPage() {
	var listItem = document.getElementById('list-holder').children,
		images;

	for(var i = listItem.length - 1; i >= 0; i--) {
		var item = listItem[i],
			widthParent = item.clientWidth,
			heightParent = item.clientHeight;

		images = item.children;
		for(var j = 0; j <= images.length - 1; j++){
			var images = images[j];
			 width = images.clientWidth,
				height = images.clientHeight;

			autoAlign(images, widthParent, heightParent, height, width);
		}
	}
}

function autoAlign(element , widthParent, heightParent, height, width ){
	var a = heightParent - height,
		b = widthParent - width;

		element.style.marginTop = a/2  + 'px';
		element.style.marginLeft = b/2 + 'px';
}

if(window.addEventListener) window.addEventListener('load', unitPage, false);
else if(window.attachEvent) window.attachEvent('onload', unitPage);