/**
 * Created by Jukka on 21/02/2017.
 */

/* Handles the audio options */
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
/* Handles the video options */
var vid = document.getElementById("video");

function playVideo() {
    vid.play();
}

function pauseVideo() {
    vid.pause();
}

/* Handles the drawing lines to the canvas */
var canvas = document.getElementById("canvas");
var Context = canvas.getContext("2d");

var startPoint;

function getMousePos(canvas, event)
{
    var rect = canvas.getBoundingClientRect();

    return{
        x: event.clientX - rect.left,
        y: event.clientY - rect.top
    }
}

function MouseDown(event)
{
    startPoint = getMousePos(canvas, event);
}

function MouseUp(event)
{
    var realMousePos = getMousePos(canvas, event);

    Context.beginPath();
    Context.moveTo(startPoint.x,startPoint.y);
    Context.lineTo(realMousePos.x, realMousePos.y);
    Context.stroke();
    Context.closePath();
}

canvas.addEventListener("mousedown", MouseDown);
canvas.addEventListener("mouseup", MouseUp);

/* Handles simple game canvas */
var GameObject;



/* Handles getting images from flickr  */
function showImages() {

    (function () {

        var searchTag = $("#tags").val();
        var flickerAPI = "http://api.flickr.com/services/feeds/photos_public.gne?jsoncallback=?";

        $.getJSON(flickerAPI, {
            tags: searchTag,
            tagmode: "any",
            format: "json"
        })
            .done(function (data) {
                $.each(data.items, function (i, item) {
                    $("<img>").attr("src", item.media.m).appendTo("#images");
                    if (i === 20) {
                        return false;
                    }

                });

            });

        $("#images").empty();

    })();
}