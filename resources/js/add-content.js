// When the user scrolls the page, execute myFunction
window.onscroll = function() {myFunction()};

// Get the header
var header = document.getElementById("navbar");

// Get the offset position of the navbar
var sticky = header.offsetTop;

// Add the sticky class to the header when you reach its scroll position. Remove "sticky" when you leave the scroll position
function myFunction() {
  if (window.pageYOffset > 550) {
    header.classList.add("sticky");
  } else {
    header.classList.remove("sticky");
  }
}

//Adding logo that changes based on time
//Using javascript and jquery
var images = [
  "resources/images/hellomoji.jpeg",
  "resources/images/eveningmoji.jpeg",
  "resources/images/afternoonmoji.jpeg",
  "resources/images/morningmoji.jpeg"
  ];

function imagesGreeting() {
  var today = new Date();
  hourNow = today.getHours();
  var IG = 0;
    if (hourNow >= 18) {IG = 1; }
    else if((hourNow >= 12) && (hourNow < 18)) {IG = 2; }
    else if((hourNow > 0) &&  (hourNow < 12)) {IG = 3; }
    document.getElementById('bitmoji').src = images[IG];
    document.getElementById('bitmoji').alt = images[IG];
}
