$(document).ready(function()  {

// $("#carousel").hide();



$(".button").click(function() {
		let buttonName = $(this).text();
 		let buttonActive = $(this).hasClass("inactive");
			console.log(buttonName);

		if (buttonActive == false) {
			$(this).addClass("inactive");
			$(this).removeClass("active");
			$(this).css("background-color", "white");
			$(this).css("color", "#41434A");
			$("." + buttonName).show();
			$("." + buttonName).not().hide();
		} 

		else {
			$(this).addClass("active");
			$(this).removeClass("inactive");
			$(this).css("background-color", "#41434A");
			$(this).css("color", "white");
			$("." + buttonName).hide();
			$("." + buttonName).not().show();
		} 
		
 })

$(".nav-item").mouseover(function() {
		const index = $(".nav-item").index(this);
		console.log(index);

		if (index == 0) {
			$("#splash_pic").attr("src", "assets/img/store.jpg");
		}		

		else if (index == 1) {
			$("#splash_pic").attr({
				src: "assets/img/carousel_5.PNG",
				width: "100%",
				overflow: "hidden"
		})
		}

		else {
			$("#splash_pic").attr("src", "assets/img/carousel_4.PNG");
		};
		
 });
		
})