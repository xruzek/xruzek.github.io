// for scrolling
var myNav = document.getElementById("nav-bar");
var test = document.getElementById("testing");
// when user scrolls more than 
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
   
    // test.style.backgroundColor = "black";
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20){
        //document.getElementById("nav-bar").style.backgroundColor = "black";
        document.getElementById("nav-bar").style.position = "sticky";
    } else {
        // document.getElementById("nav-bar").style.backgroundColor = "rgb(236, 232, 232)";
        document.getElementById("nav-bar").style.position = "static";
    }
}