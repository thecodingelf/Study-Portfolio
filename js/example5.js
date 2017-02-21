/**
 * Created by Jukka on 07/02/2017.
 */

var LINE = 1;
var RECTANGLE = 2;

var currentDrawingMode = LINE;

var canvas = document.getElementById("drawingCanvas");
var drawingContext = canvas.getContext("2d");

var startPoint;

function setDrawingMode(newDrawingMode)
{
    currentDrawingMode = newDrawingMode;
}

function getMousePos(canvas, evt)
{
    var rect = canvas.getBoundingClientRect();

    return{
        x: evt.clientX - rect.left,
        y: evt.clientY - rect.top
    }
}

function MouseDown(event)
{
    startPoint = getMousePos(canvas, event);
}

function clearCanvas()
{
    drawingContext.clearRect(0,0, canvas.width, canvas.height);
}

function MouseUp(event)
{
    var realMousePos = getMousePos(canvas, event);

    if (currentDrawingMode == LINE)
    {
        drawingContext.beginPath();
        drawingContext.moveTo(startPoint.x,startPoint.y);
        drawingContext.lineTo(realMousePos.x, realMousePos.y);
        drawingContext.stroke();
    }
    else if (currentDrawingMode == RECTANGLE)
    {
        drawingContext.beginPath();
        drawingContext.rect(startPoint.x,
            startPoint.y,
            realMousePos.x - startPoint.x,
            realMousePos.y - startPoint.y);
        drawingContext.fill();
    }
}

canvas.addEventListener("mousedown", MouseDown);
canvas.addEventListener("mouseup", MouseUp);