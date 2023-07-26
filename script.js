// When user clicks button, toggle between hiding and showing dropdown
function dropDown() {
    document.getElementById("myDropdown").classList.toggle("show");
    document.getElementById("bar--1").classList.toggle("bar--1");
    document.getElementById("bar--2").classList.toggle("bar--2");
    document.getElementById("bar--3").classList.toggle("bar--3");
    document.getElementById("bar--1").classList.toggle("bar--1-transformed");
    document.getElementById("bar--2").classList.toggle("bar--2-transformed");
    document.getElementById("bar--3").classList.toggle("bar--3-transformed");
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

function toggleContent1() {
    document.getElementById("timeline-content-1").classList.toggle("show");
    document.getElementById("timeline-content-1").classList.toggle("hidden");
    document.getElementById("arrow-left-1").classList.toggle("arrow-left");
    document.getElementById("arrow-left-1").classList.toggle("arrow-left-transformed");
    document.getElementById("arrow-right-1").classList.toggle("arrow-right");
    document.getElementById("arrow-right-1").classList.toggle("arrow-right-transformed");
    console.log('I\'m working');
}

function toggleContent2() {
    document.getElementById("timeline-content-2").classList.toggle("show");
    document.getElementById("timeline-content-2").classList.toggle("hidden");
    document.getElementById("arrow-left-2").classList.toggle("arrow-left");
    document.getElementById("arrow-left-2").classList.toggle("arrow-left-transformed");
    document.getElementById("arrow-right-2").classList.toggle("arrow-right");
    document.getElementById("arrow-right-2").classList.toggle("arrow-right-transformed");
    console.log('I\'m working');
}

function toggleContent3() {
    document.getElementById("timeline-content-3").classList.toggle("show");
    document.getElementById("timeline-content-3").classList.toggle("hidden");
    document.getElementById("arrow-left-3").classList.toggle("arrow-left");
    document.getElementById("arrow-left-3").classList.toggle("arrow-left-transformed");
    document.getElementById("arrow-right-3").classList.toggle("arrow-right");
    document.getElementById("arrow-right-3").classList.toggle("arrow-right-transformed");
    console.log('I\'m working');
}

function toggleContent4() {
    document.getElementById("timeline-content-4").classList.toggle("show");
    document.getElementById("timeline-content-4").classList.toggle("hidden");
    document.getElementById("arrow-left-4").classList.toggle("arrow-left");
    document.getElementById("arrow-left-4").classList.toggle("arrow-left-transformed");
    document.getElementById("arrow-right-4").classList.toggle("arrow-right");
    document.getElementById("arrow-right-4").classList.toggle("arrow-right-transformed");
    console.log('I\'m working');
}

function toggleContent5() {
    document.getElementById("timeline-content-5").classList.toggle("show");
    document.getElementById("timeline-content-5").classList.toggle("hidden");
    document.getElementById("arrow-left-5").classList.toggle("arrow-left");
    document.getElementById("arrow-left-5").classList.toggle("arrow-left-transformed");
    document.getElementById("arrow-right-5").classList.toggle("arrow-right");
    document.getElementById("arrow-right-5").classList.toggle("arrow-right-transformed");
    console.log('I\'m working');
}