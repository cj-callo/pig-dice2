function Player () {
  this.totalScore=0;
  this.currentScore=0;
};

Player.prototype.rollDie = function(){
  var roll = Math.floor((Math.random() * 5) + 1);
  console.log(roll);
  if (roll === 1) {
    this.currentScore = 0;
    alert("You lost your score");
  } else {
    this.currentScore = this.currentScore + roll;
  }
  $("#result").append("<li>Your roll was " + roll + ".  Your score this turn is "+ this.currentScore + "</li>");
}

Player.prototype.saveScore = function() {
  this.totalScore = this.currentScore;
  $("#result").append("<li> Your total score is "+ this.currentScore + "</li>");
}






$(document).ready(function() {
  var player1 = new Player();
  $("#player1").click(function(){
    player1.rollDie();
    console.log(player1.currentScore);
  });
  $("#save1").click(function(){
    player1.saveScore();
    console.log(player1);

  });

});

// function myFunction1() {
//     var x = Math.floor((Math.random() * 10) + 1);
//     $("#result").append("<li>" + x + "</li>");
// }
//     if (x === 1) {
//     var x = "Loose a turn ";
//   }
//     else {
//       var x = "";
//     }
//   function myFunction2() {
// var y = Math.floor((Math.random() * 10) + 1);
// $("#result2").append("<li>" + y + "</li>");
// }
