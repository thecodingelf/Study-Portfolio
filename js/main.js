/* Main javascript file for the functions */

/* Handles the chat */
var webChat = "wss://obscure-waters-98157.herokuapp.com/";
var output;

function init()
{
    output = document.getElementById("output");
    testWebSocket();
}

function testWebSocket()
{
    websocket = new WebSocket(webChat);
    websocket.onOpen = function(evt) { onOpen(evt) };
    websocket.onClose = function(evt) { onClose(evt) };
    websocket.onMessage = function(evt) { onMessage(evt) };
    websocket.onError = function(evt) { onError(evt) };
}

function onOpen(evt)
{
    writeToScreen("CONNECTED");
}


function onMessage(evt)
{
    writeToScreen('<span style="color: blue;">RESPONSE: ' + evt.data+'</span>');
}

function writeToScreen(message)
{
    var pre = document.createElement("p");
    pre.style.wordWrap = "break-word";
    pre.innerHTML = message;
    output.appendChild(pre);
}

function webTest(){
    chat = document.getElementById('webTest');
    hei = chat.value;
    websocket.send(hei);
}

window.addEventListener("load", init, false);

/* Add person */
function addPerson()
{
  var list = document.getElementById("newPerson").value;
  document.getElementById("addedPerson").innerHTML = document.getElementById("addedPerson").innerHTML + "<br>" + list;
}

function addPerson2()
{
    var list = document.getElementById("newPerson2").value;
    document.getElementById("addedPerson2").innerHTML = document.getElementById("addedPerson2").innerHTML + "<br>" + list;
}

