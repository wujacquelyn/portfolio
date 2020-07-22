var now = new Date()
var hr = now.getHours()
var min = now.getMinutes()
var sec = now.getSeconds()
var day = now.getDate()
var weekDay = now.getDay()
var month = now.getMonth()
var background= document.getElementById('BG');
var picture=document.getElementById('pic');

//daytime
if (hr>5,hr<18){
    background.style.backgroundColor = "#37C6DD";
  picture.src= "img/daysky.svg";
    console.log("it is daytime")
  } else {
  background.style.backgroundColor = "#1A006A";
    console.log("it's nighttime")}

//mouse position
document.addEventListener("click", function userClicked(e){
  console.log(randomNum);
  var x = event.clientX;
  var y = event.clientY;
  var icons = new Array("img/pinkspark.svg","img/bluespark.svg","img/yellowspark.svg","img/purplestar.svg","img/bluestar.svg","img/coco.svg","img/eye.svg","img/lightbulb.svg","img/pen.svg");
  var randomNum = Math.floor(Math.random() * icons.length);
  var tag = document.createElement('img');
  tag.src =icons[randomNum];
  document.getElementById('clickIMG').appendChild(tag);
  tag.style.opacity = '1';
  tag.style.position = 'fixed';
  tag.style.left = x +'px';
  tag.style.top = y + 'px';
})