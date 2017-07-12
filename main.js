function appearHelmet(){
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

  var allElements = [rightEar, leftEar,core, leftCheek, rightCheek, frontPlate, glass, line, rangefinder, other];
  for(var i = 0; i < allElements.length; i++){
    console.log(i);
    setTimeout(function(i){
      allElements[i].style.opacity = 1
    }.bind(null, i), i*200);
  }
}

