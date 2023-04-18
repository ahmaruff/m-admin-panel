// set WIDTH TO 250px

function openSidenav() {
    document.getElementById('sidenav').style.width = "250px";
    document.getElementById('main').style.marginLeft = "250px";

    document.getElementById('open-sidenav-menu').style.display = "none";
    document.getElementById('close-sidenav-menu').style.display = "block";
}

// Set WIDTH to 0
function closeSidenav() {
    document.getElementById('sidenav').style.width = "0";
    document.getElementById('main').style.marginLeft = "0";
    document.getElementById('open-sidenav-menu').style.display = "block";
    document.getElementById('close-sidenav-menu').style.display = "none";
}


// CHECK OVERFLOW
var docWidth = document.documentElement.offsetWidth;

[].forEach.call(
document.querySelectorAll('*'),
function(el) {
    if (el.offsetWidth > docWidth) {
    console.log(el);
    }
});