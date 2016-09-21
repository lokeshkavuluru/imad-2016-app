console.log('Loaded!');
//edit the text using js
var element = document.getElementById('main-text');

element.innerHTML = 'New experience using java script has beeen served';

var img = document.getElementById('lokesh');
var marginRight = 0;
function moveRight(){
    marginRight = marginRight + 1;
img.style.marginRight = marginRight + px;
}

img.onclick = function(){
    var interval = setInterval(moveRight,50);
};