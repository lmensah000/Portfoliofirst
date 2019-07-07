//Adding logo that changes based on time
//Using javascript and jquery
var today = new Date();
var hourNow = today.getHours();
//Add image into header container
//var conElem = document.getElementById('<img src="resources/images/eveningmoji.jpeg">');
//$('#surprise').append("<img src='images/aftersurprise.png' />");

if (hourNow >= 18) {
  document.write('<img src="resources/images/eveningmoji.jpeg">');
}
else if (hourNow >= 12 && hourNow < 18) {
  document.write('<img src="resources/images/afternoonmoji.jpeg">');
}
else if(hourNow > 0 &&  hourNow < 12) {
  document.write('<img src="resources/images/morningmoji.jpeg">');
}

// Get the container element


//Creates scroll effect when clicking through navbar links
$(function() {
	$('ul.navb a').bind('click',function(event){
    event.preventDefault();
		var $anchor = $(this);
    console.log($anchor.attr('href'))
		$('html, body').stop().animate({
			scrollTop: $($anchor.attr('href')).offset().top
		}, 1000);
		event.preventDefault();
	});
});
