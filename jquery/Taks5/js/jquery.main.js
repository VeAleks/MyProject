$(function() {
	initMoveTank();
});

function initMoveTank() {
	var tank = $('.box'), 
		tankHeight = tank.height(),
		tankWidth = tank.width(),
		holder = $('.box-holder'),
		diffHeight = holder.height() - tankHeight,
		diffWidth = holder.width() - tankWidth,
		posY = diffHeight/2,
		posX = diffWidth/2,
		currentBg = tank.css('backgroundImage'),
		bg;

	function rulesDrive() {
		if(posY < 0){
			posY = 0;
		}
		if(posY > diffHeight){
			posY = diffHeight;
		}
		if(posX < 0){
			posX = 0;
		}
		if(posX > diffWidth){
			posX = diffWidth;
		}
	}

	function drawTank(){
		tank.css({
			top: posY,
			left: posX
		});
	}

	function changeBg(item) {
		if(currentBg !== item){
			currentBg = item;
			tank.css({background:currentBg});
		}
	}
	
	holder.ready(function(){
		tank.css('position','absolute');
		drawTank();
	});

	holder.on('mousedown', function(e){
		posX = e.pageX - holder.offset().left - tankWidth/2;
		posY = e.pageY - holder.offset().top - tankHeight/2;
		rulesDrive();
		drawTank();
	});

	$(document).keydown(function(e){
		switch(e.keyCode) {
			case 37:
				bg = 'url("images/tank-left.gif")';
				changeBg(bg);
				posX = posX - tankWidth;
				break;
			case 38:
				bg = 'url("images/tank-up.gif")';
				changeBg(bg);
				posY = posY - tankHeight;
				break;
			case 39:
				bg = 'url("images/tank-right.gif")';
				changeBg(bg);
				posX  = posX + tankWidth;
				break;
			case 40:
				bg = 'url("images/tank-down.gif")';
				changeBg(bg);
				posY = posY + tankHeight;
				break;
		}
		rulesDrive();
		drawTank();
	});
}