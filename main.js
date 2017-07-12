var rightEar = document.getElementById("right_ear");
var leftEar = document.getElementById("left_ear");
var core = document.getElementById("core");
var leftCheek = document.getElementById("left_cheek");
var rightCheek = document.getElementById("right_cheek");
var frontPlate = document.getElementById("front_plate");
var glass = document.getElementById("glass");
var line = document.getElementById("line");
var rangefinder = document.getElementById("rangefinder");
var other = document.getElementById("other");

var state = "invisible";

function toggleHelmet(){
  if(state=="invisible"){
    appearHelmet();
    state = "visible";
  }
  else{
    hideHelmet();
    state = "invisible";
  }
}

function appearHelmet(){
  var allElements = [rightEar, leftEar,core, leftCheek, rightCheek, frontPlate, glass, line, rangefinder, other];
  for(var i = 0; i < allElements.length; i++){
    setTimeout(function(i){
      allElements[i].style.opacity = 1
    }.bind(null, i), i*200);
  }
}

function hideHelmet(){
  var allElements2 = [rightEar, leftEar,core, leftCheek, rightCheek, frontPlate, glass, line, rangefinder, other];
  allElements2.reverse();
  for(var i = 0; i < allElements2.length; i++){
    setTimeout(function(i){
      allElements2[i].style.opacity = 0
    }.bind(null, i), i*200);
  }
}
