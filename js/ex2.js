/**
 * Created by Jukka on 17/01/2017.
 */

function addPerson(){

    var FirstNameElement = document.getElementById('FirstNameField');

    console.log('adding a person' + FirstNameElement.value);

    var personNamebox = document.getElementById('personNamebox');
    personNamebox.innerText = FirstNameElement.value;

}

function addSomething(){

    var inputField = document.getElementById('somethingField');
    var results = document.getElementById('resultbox');

    var newElement = document.createElement('input');
    newElement.setAttribute('type', 'text');
    newElement.setAttribute('placeholder', inputField.value);
    results.appendChild(newElement);
}
