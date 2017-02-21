/**
 * Created by Jukka on 31/01/2017.
 */

function save() {
    var inputElement = getInputElement()
    var userString = inputElement.value
    
    localStorage.setItem('userText', userString)
}

var jsArray = ['Ulla Taalasmaa', 'Seppo Taalasmaa']

function getInputElement() {
    return document.getElementById('inputTest')
}

function load() {
    var inputElement = getInputElement()
    inputElement.value = localStorage.setItem('userText', userString)
}

storage.prototype.setObject = function(key, value){
    this.setItem(key, JSON.stringify(value))
}

storage.prototype.getObject = function(key){
    var value = this.getItem(key)

}

function drawSomething(){
    var canvas = document.getElementById('boxcanvas')
    var drawingContext = canvas.getContext('2d')

}

function getRandomnNumber(){
    return Math.floor(Math.random())
}