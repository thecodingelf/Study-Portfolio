/*** Created by Jukka on 24/01/2017.*/

var aud = document.getElementById("myAudio");

function PlayAudio() {
    aud.play();
}

function PauseAudio() {
    aud.pause();
}

function changeVolume(){
    var myAudio = document.getElementById("myAudio");
    myAudio.volume = document.getElementById("volumeSlider").value;
}