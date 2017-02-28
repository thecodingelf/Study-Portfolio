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

/* Local storage */
function save()
{
    var inputElement = getInputElement();
    var userString = inputElement.value;

    localStorage.setItem("userText" , userString);
}

var jsArray = ["Hans Soloel", "Isac Newtown", "Matt Solo"];


function getInputElement()
{
    return document.getElementById("inputText");
}

function load()
{
    var inputElement = getInputElement();
    inputElement.value = localStorage.getItem("userText");
}

Storage.prototype.setObject = function(key, value)
{
    this.setItem(key, JSON.stringify(value));
}

Storage.prototype.getObject = function(key)
{
    var value = this.getItem(key);
    return JSON.parse(value);
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
function startGame() {

var canvas = document.getElementById('gamecanvas');
var context = canvas.getContext('2d');

var square;
var time = 0;
var result = 0;
var game = false;

function Square(x, y, w, h) {
    this.x = x;
    this.y = y;
    this.w = w;
    this.h = h;
}

var timer;

function getMousePos(canvas, event) {
    var rect = canvas.getBoundingClientRect();

    return {
        x: event.clientX - rect.left,
        y: event.clientY - rect.top
    }
}

function onClick(e) {
    var mousePos = getMousePos(canvas, e);
    if (!square && !game) {
        var time = 20;
        timer = setInterval(function() {
            if (time) {
                document.getElementById('time').innerHTML = time;
                time--;
            } else {
                game = false;
                document.getElementById('time').innerHTML = "GAME OVER!";
                clearInterval(timer);
            }
        }, 500);
        game = true;
        square = new Square(Math.random() * (canvas.width - 30), Math.random() * (canvas.height - 30), 30, 30);
        context.clearRect(0, 0, canvas.width, canvas.height);
        context.beginPath();
        context.rect(square.x, square.y, 30, 30);
        context.stroke();
    } else if (mousePos.x >= square.x && mousePos.x <= square.x + square.w && mousePos.y >= square.y && mousePos.y <= square.y + square.h && game) {
        document.getElementById('score').innerHTML = ++result;
        square = new Square(Math.random() * (canvas.width - 30), Math.random() * (canvas.height - 30), 30, 30);
        context.clearRect(0, 0, canvas.width, canvas.height);
        context.beginPath();
        context.rect(square.x, square.y, 30, 30);
        context.stroke();
    }
}

canvas.addEventListener("click", onClick);
}

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