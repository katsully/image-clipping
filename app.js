$(document).ready(function(){
	
	var newImg = $("<img id='myImg' src='sunrise.jpeg'>");
	newImg.css("width", "90%");
	// $('body').append(newImg);
	// $("#myImg").css("position", "absolute");
	// $("#myImg").css("clip", "rect(0px 150px 150px 0px)");
	// $("#myImg").css("left", "100px");
	// $("#myImg").css("z-index", "100");	



	var imgWidth = $("#og").width();
	var imgHeight = $("#og").height();
	// var cou
	// var newImg = $("<img src='sunrise.jpeg'>");
	// 		newImg.css("position", "absolute");
	// 		var newRect = "rect(" + 0 + "px " + 50 + "px " + 50 + "px " + 0 +"px)"
	// 		newImg.css("clip", newRect);
	// 		var newLeft = 0 + 75 + "px"
	// 		var newTop = 50 + "px"
	// 		newImg.css("left", newLeft);
	// 		newImg.css("top", newTop);
	// 		newImg.css("z-index", "100");	
	// 		$('body').append(newImg);
	var counter = 0;
	for(var i=0; i<5; i += 1) {
		var newImg = $("<img src='sunrise.jpeg'>");
		newImg.css("position", "absolute");
		var newX = Math.floor(Math.random() * Math.floor(imgWidth));
		var newY = Math.floor(Math.random() * Math.floor(imgWidth - 75));
		var left = newX-50;
		var bottom = newY+50;
		// object.style.clip = "rect(top right bottom left)"
		var newRect = "rect(" + newY + "px " + newX + "px " + bottom + "px " + left +"px)"
		newImg.css("clip", newRect);
		var newLeft = 5 +   "px";
		var newTop = 5 +  "px";
		newImg.css("left", left);
		newImg.css("top", newY);
		newImg.css("z-index", "100" + counter);
		$('body').append(newImg);
		counter+=1;
	}
})