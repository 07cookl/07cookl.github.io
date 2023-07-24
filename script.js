// When user clicks button, toggle between hiding and showing dropdown
function myFunction() {
    document.getElementById("myDropdown").classList.toggle("show");
    // var dropdown = document.getElementById("myDropdown");

    // if (dropdown.style.display === "block") {
    //     dropdown.display = "none";
    // } else {
    //     dropdown.display = "block";
    // };
    console.log('I\'m working');
}

// Close menu if user clicks outside of it
window.onclick = function(event) {
    if (!event.target.matches('.dropbtn')) {

        var dropdowns = document.getElementsByClassName("dropdown-content");
        var i;
        for (i = 0; i < dropdowns.length; i++) {
            var openDropdown = dropdowns[i];
            if (openDropdown.classList.contains('show')) {
                openDropdown.classList.remove('show');
            }
        }
    }
}