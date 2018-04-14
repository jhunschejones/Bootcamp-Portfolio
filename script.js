var i;
var txt = "Nice To Meet You...";
var speed = 200;

function typeWriter() {
    if (i < txt.length) {
        document.getElementById("nice_to_meet_you").innerHTML += txt.charAt(i);
        i++;
        setTimeout(typeWriter, speed);
    }
}

function loopType() {
    i = 0;
    document.getElementById("nice_to_meet_you").innerHTML = "";
    typeWriter();
}


$( document ).ready(function() {
    i = 0;
    typeWriter();
    setInterval(loopType, 6000);
});