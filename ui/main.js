console.log('Loaded!');
//edit the text using js
var element = document.getElementById('main-text');

element.innerHTML = 'New experience using java script has beeen served';

var img = document.getElementById('lokesh');

img.onclick = function()
{
    img.style.marginLeft('100px');
};