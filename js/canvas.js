/**
 * Created by Jukka on 31/01/2017.
 */

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

