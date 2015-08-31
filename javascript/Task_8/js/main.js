function initPage() {
	var visualHolder = document.getElementById('visual'),
		urlArray = visualHolder.innerHTML.split(';'),
		imageUrl = urlArray[Math.floor(Math.random() * (urlArray.length))];
	
	visualHolder.innerHTML = '<img src="' + imageUrl + '" alt="image description">';
}

if(window.addEventListener) window.addEventListener('load', initPage, false);
else if(window.attachEvent) window.attachEvent('onload', initPage);