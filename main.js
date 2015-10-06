function setTime(){
var timeNow = new Date();
// console.log(timeNow);

var hoursNow = timeNow.getHours();
var minutesNow = timeNow.getMinutes();
var secondsNow = timeNow.getSeconds();
//leading 0 for minutes and seconds if needed
  if(minutesNow < 10) {
    minutesNow = '0'+minutesNow;
  } 

 if(secondsNow < 10) {
    // console.log(secondsNow);
    secondsNow = '0'+secondsNow;
  }

var currentTime = hoursNow+":"+minutesNow+":"+secondsNow;

 // console.log(currentTime);
$('.clock').html(currentTime);
}
window.onload = setTime();
setInterval('setTime()', 1000);

//clock to hex + color

function hexColor(){ 
  var hexTime = new Date();
  
  var hexHours = hexTime.getHours();
  var hexMinutes = hexTime.getMinutes();
  var hexSeconds = hexTime.getSeconds();
  if (hexHours < 10) {
    hexHours = '0'+hexHours;
  }

  if (hexMinutes < 10) {
    hexMinutes = '0'+hexMinutes;
  }
  if (hexSeconds < 10) {
    hexSeconds = '0'+hexSeconds;
  }

  var hexFinalTime = '#'+hexHours+hexMinutes+hexSeconds;
  // console.log(hexFinalTime);
  $('.hexClock').html(hexFinalTime);

  $('.backgroundColor').css('background-color', hexFinalTime);
  $('h1').css('color', 'white');

  
}
window.onload = hexColor();
setInterval('hexColor()', 1000);











