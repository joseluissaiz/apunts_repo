window.onscroll = function() {fixNav()};

var navbar = document.getElementById("navegacion");

var navFix = navbar.offsetTop;

function fixNav() {
    if (window.pageYOffset >= navFix) {
        navbar.classList.add("navFix")
    } else {
        navbar.classList.remove("navFix");
    }
}
