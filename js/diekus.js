var style = document.createElement('link');

var date1 = new Date(Date.now());
var h = date1.getHours();

if(h > 7 && h < 20){
    style.setAttribute('href', 'css/style.css');
}
else{
    style.setAttribute('href', 'css/style-night.css');
}

style.setAttribute('rel', 'stylesheet');
document.querySelector('head').appendChild(style);
